import { ReactNode } from 'react';
import { Baby, Shield, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { BottomNavigation } from './BottomNavigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Button } from '@/components/ui/button';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { t } = useLanguage();
  const { session, isAdmin, signOut } = useAdminAuth();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Baby className="w-5 h-5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-sm leading-tight">
                {t.appName}
              </span>
              <span className="text-[10px] text-muted-foreground leading-tight hidden sm:block">
                {t.appTagline}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {session && isAdmin ? (
              <>
                <Button asChild variant="outline" size="sm" className="gap-1.5 h-8">
                  <Link to="/admin/dashboard"><Shield className="w-3.5 h-3.5" /> Admin</Link>
                </Button>
                <Button variant="ghost" size="sm" className="gap-1.5 h-8" onClick={() => signOut()}>
                  <LogOut className="w-3.5 h-3.5" /> Logout
                </Button>
              </>
            ) : (
              <Button asChild variant="ghost" size="sm" className="gap-1.5 h-8">
                <Link to="/admin/login"><Shield className="w-3.5 h-3.5" /> Admin</Link>
              </Button>
            )}
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-nav">
        {children}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};
