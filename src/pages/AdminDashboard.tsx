import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select';
import { LogOut, Eye, FileDown, FileSpreadsheet } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { exportSurveysToExcel, exportSurveysToPDF, type SurveyRow } from '@/lib/adminExport';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { signOut } = useAdminAuth();
  const [rows, setRows] = useState<SurveyRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [genderFilter, setGenderFilter] = useState<string>('all');
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('surveys')
        .select('*')
        .order('submitted_at', { ascending: false });
      if (!error && data) setRows(data as unknown as SurveyRow[]);
      setLoading(false);
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return rows.filter((r) => {
      if (q && !r.parent_name.toLowerCase().includes(q) && !r.parent_email.toLowerCase().includes(q)) return false;
      if (genderFilter !== 'all' && r.gender !== genderFilter) return false;
      if (dateFrom && new Date(r.submitted_at) < new Date(dateFrom)) return false;
      if (dateTo && new Date(r.submitted_at) > new Date(dateTo + 'T23:59:59')) return false;
      return true;
    });
  }, [rows, search, genderFilter, dateFrom, dateTo]);

  const handleLogout = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <div className="page-transition p-4">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
        <h1 className="text-title text-foreground">Admin Dashboard</h1>
        <Button variant="outline" size="sm" onClick={handleLogout} className="gap-1.5">
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-card border border-border rounded-xl p-4 mb-4 shadow-soft grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">Search (name / email)</Label>
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search…" />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Gender</Label>
          <Select value={genderFilter} onValueChange={setGenderFilter}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1">
          <Label className="text-xs">From</Label>
          <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">To</Label>
          <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => exportSurveysToExcel(filtered)}>
          <FileSpreadsheet className="w-4 h-4" /> Export Excel
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => exportSurveysToPDF(filtered)}>
          <FileDown className="w-4 h-4" /> Export PDF
        </Button>
        <span className="text-sm text-muted-foreground self-center ml-auto">{filtered.length} submission(s)</span>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl shadow-soft overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-left">
            <tr>
              <th className="p-3 font-medium">Survey ID</th>
              <th className="p-3 font-medium">Parent Name</th>
              <th className="p-3 font-medium">Email</th>
              <th className="p-3 font-medium">Gender</th>
              <th className="p-3 font-medium">Score</th>
              <th className="p-3 font-medium">Date</th>
              <th className="p-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td colSpan={7} className="p-6 text-center text-muted-foreground">Loading…</td></tr>}
            {!loading && filtered.length === 0 && (
              <tr><td colSpan={7} className="p-6 text-center text-muted-foreground">No submissions found.</td></tr>
            )}
            {filtered.map((r) => (
              <tr key={r.id} className="border-t border-border">
                <td className="p-3 font-mono text-xs">{r.id.slice(0, 8)}…</td>
                <td className="p-3">{r.parent_name}</td>
                <td className="p-3">{r.parent_email}</td>
                <td className="p-3">{r.gender}</td>
                <td className="p-3">{r.score}/{r.total}</td>
                <td className="p-3 whitespace-nowrap">{new Date(r.submitted_at).toLocaleString()}</td>
                <td className="p-3">
                  <Button asChild size="sm" variant="outline" className="gap-1.5">
                    <Link to={`/admin/survey/${r.id}`}><Eye className="w-3.5 h-3.5" /> View</Link>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
