import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileDown } from 'lucide-react';
import { exportSurveysToPDF, type SurveyRow, type AnswerRecord } from '@/lib/adminExport';

const AdminSurvey = () => {
  const { id } = useParams();
  const [row, setRow] = useState<SurveyRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const { data } = await supabase.from('surveys').select('*').eq('id', id).maybeSingle();
      setRow(data as SurveyRow | null);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading…</div>;
  if (!row) return <div className="p-8 text-center text-muted-foreground">Survey not found.</div>;

  const answers = (row.answers ?? []) as AnswerRecord[];

  return (
    <div className="page-transition p-4 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <Link to="/admin/dashboard"><ArrowLeft className="w-4 h-4" /> Back</Link>
        </Button>
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => exportSurveysToPDF([row])}>
          <FileDown className="w-4 h-4" /> Export PDF
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 mb-4 shadow-soft">
        <h2 className="font-semibold text-foreground mb-3">Parent Information</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm">
          <dt className="text-muted-foreground">Parent Name</dt><dd>{row.parent_name}</dd>
          <dt className="text-muted-foreground">Parent Email</dt><dd className="break-all">{row.parent_email}</dd>
          <dt className="text-muted-foreground">Gender</dt><dd>{row.gender}</dd>
          <dt className="text-muted-foreground">Submission Date</dt><dd>{new Date(row.submitted_at).toLocaleString()}</dd>
          <dt className="text-muted-foreground">Survey ID</dt><dd className="font-mono text-xs break-all">{row.id}</dd>
          <dt className="text-muted-foreground">Health Score</dt><dd className="font-semibold">{row.score}/{row.total}</dd>
        </dl>
      </div>

      <div className="bg-card border border-border rounded-xl p-5 shadow-soft">
        <h2 className="font-semibold text-foreground mb-3">Survey Answers</h2>
        <div className="space-y-3">
          {answers.map((a, i) => (
            <div key={i} className="border-b border-border last:border-0 pb-3 last:pb-0">
              <p className="font-medium text-foreground">Q{i + 1}. {a.question}</p>
              <p className="text-sm mt-1">
                <span className="text-muted-foreground">Selected Answer: </span>
                <span className="font-medium">{a.selectedText}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminSurvey;
