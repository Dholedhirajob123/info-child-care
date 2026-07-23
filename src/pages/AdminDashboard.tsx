import { useEffect, useMemo, useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { LogOut, Eye, Trash2, Loader2 } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { type SurveyRow } from '@/lib/adminExport';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyStrings } from '@/lib/surveyI18n';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { toast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { signOut } = useAdminAuth();
  const { language } = useLanguage();
  const s = surveyStrings[language];
  const [rows, setRows] = useState<SurveyRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedDeleteId, setSelectedDeleteId] = useState<string | null>(null);

  const fetchSurveys = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('surveys')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        console.error('Error fetching surveys:', error);
        toast({
          title: 'Error',
          description: 'Failed to load surveys.',
          variant: 'destructive',
        });
        return;
      }

      if (data) {
        setRows(data as unknown as SurveyRow[]);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      toast({
        title: 'Error',
        description: 'An unexpected error occurred.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (q && !r.parent_name.toLowerCase().includes(q) && !r.parent_email.toLowerCase().includes(q)) {
        return false;
      }
      if (genderFilter !== 'all' && r.gender !== genderFilter) {
        return false;
      }
      return true;
    });
  }, [rows, search, genderFilter]);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast({
        title: 'Error',
        description: 'Failed to logout.',
        variant: 'destructive',
      });
    }
  };

  const handleDelete = async (id: string) => {
    console.log('🗑️ Attempting to delete survey:', id);
    setDeletingId(id);
    setDeleteDialogOpen(false);

    try {
      const { error } = await supabase
        .from('surveys')
        .delete()
        .eq('id', id);

      console.log('📦 Delete response:', { error });

      if (error) {
        console.error('❌ Delete error:', error);
        toast({
          title: 'Delete Failed',
          description: error.message || 'Failed to delete survey.',
          variant: 'destructive',
        });
        setDeletingId(null);
        return;
      }

      toast({
        title: 'Success',
        description: 'Survey deleted successfully!',
        variant: 'default',
      });

      // Remove from state
      setRows(prevRows => prevRows.filter(row => row.id !== id));

    } catch (error: any) {
      console.error('💥 Error:', error);
      toast({
        title: 'Error',
        description: error.message || 'An error occurred.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  const openDeleteDialog = (id: string) => {
    setSelectedDeleteId(id);
    setDeleteDialogOpen(true);
  };

  const getGenderLabel = (gender: string) => {
    if (gender === 'Male') return s.male;
    if (gender === 'Female') return s.female;
    return gender || 'Other';
  };

  return (
    <div className="page-transition p-4">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h1 className="text-title text-foreground">{s.adminDashboard}</h1>
        <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5">
          <LogOut className="w-4 h-4" /> {s.logout}
        </Button>
      </div>

      {/* Filters - Removed Date Filters */}
      <div className="bg-card border border-border rounded-xl p-4 mb-4 shadow-soft grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">{s.searchNameEmail}</Label>
          <Input 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            placeholder="Search by name or email..." 
            className="bg-background"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">{s.gender}</Label>
          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger className="bg-background">
              <SelectValue placeholder="All genders" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border z-50">
              <SelectItem value="all">{s.all}</SelectItem>
              <SelectItem value="Male">{s.male}</SelectItem>
              <SelectItem value="Female">{s.female}</SelectItem>
              <SelectItem value="Other">{s.other}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="p-3 font-medium">#</th>
              <th className="p-3 font-medium">{s.parentNameCol}</th>
              <th className="p-3 font-medium">{s.emailCol}</th>
              <th className="p-3 font-medium">{s.genderCol}</th>
              <th className="p-3 font-medium">{s.dateCol}</th>
              <th className="p-3 font-medium">{s.actionCol}</th>
              <th className="p-3 font-medium text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-muted-foreground">
                  <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                  {s.loadingText}
                </td>
              </tr>
            )}
            
            {!loading && filtered.length === 0 && (
              <tr>
                <td colSpan={7} className="p-8 text-center text-muted-foreground">
                  {s.noSubmissions}
                </td>
              </tr>
            )}
            
            {!loading && filtered.map((r, index) => (
              <tr key={r.id} className="border-t border-border hover:bg-muted/20 transition-colors">
                <td className="p-3 text-center text-muted-foreground">{index + 1}</td>
                <td className="p-3 font-medium">{r.parent_name}</td>
                <td className="p-3 text-muted-foreground">{r.parent_email}</td>
                <td className="p-3">{getGenderLabel(r.gender)}</td>
                <td className="p-3 whitespace-nowrap text-muted-foreground">
                  {new Date(r.submitted_at).toLocaleDateString()}
                  <br />
                  <span className="text-xs">
                    {new Date(r.submitted_at).toLocaleTimeString()}
                  </span>
                </td>
                <td className="p-3">
                  <Button asChild size="sm" variant="outline" className="gap-1.5">
                    <Link to={`/admin/survey/${r.id}`}>
                      <Eye className="w-3.5 h-3.5" /> {s.view}
                    </Link>
                  </Button>
                </td>
                <td className="p-3 text-center">
                  <Button
                    size="sm"
                    variant="destructive"
                    className="gap-1.5 hover:bg-destructive/90"
                    onClick={() => openDeleteDialog(r.id)}
                    disabled={deletingId === r.id}
                  >
                    {deletingId === r.id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                    {deletingId === r.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-card border-border max-w-md">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-foreground">Are you sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-muted-foreground">
              This will permanently delete this survey submission. 
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel className="bg-secondary hover:bg-secondary/80">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (selectedDeleteId) {
                  handleDelete(selectedDeleteId);
                }
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              Delete Survey
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminDashboard;