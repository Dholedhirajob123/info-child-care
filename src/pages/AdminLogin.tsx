import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyStrings } from '@/lib/surveyI18n';

const AdminLogin = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const s = surveyStrings[language];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { data, error: signInErr } = await supabase.auth.signInWithPassword({
      email: email.trim().toLowerCase(),
      password,
    });
    if (signInErr || !data.session) {
      setError(s.invalidCreds);
      setLoading(false);
      return;
    }
    const { data: role } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', data.session.user.id)
      .eq('role', 'admin')
      .maybeSingle();
    if (!role) {
      await supabase.auth.signOut();
      setError(s.invalidCreds);
      setLoading(false);
      return;
    }
    navigate('/admin/dashboard');
  };

  return (
    <div className="page-transition p-4">
      <div className="max-w-sm mx-auto py-12">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <Lock className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-title text-foreground">{s.adminLogin}</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-5 shadow-soft space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="email">{s.adminEmail}</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">{s.adminPassword}</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? s.signingIn : s.signIn}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
