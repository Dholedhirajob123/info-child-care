import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Activity, Syringe, Lightbulb, HelpCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

export const BottomNavigation = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: t.home },
    { path: '/topics', icon: BookOpen, label: t.topics },
    { path: '/tracker', icon: Activity, label: t.tracker },
    { path: '/vaccination', icon: Syringe, label: t.vaccination },
    { path: '/quiz', icon: HelpCircle, label: t.quiz || 'Quiz' },
    { path: '/tips', icon: Lightbulb, label: t.tips },
  ];

  return (
    <nav className="bottom-nav z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || 
            (item.path !== '/' && location.pathname.startsWith(item.path));
          
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 w-16 h-14 rounded-xl transition-all duration-200',
                isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <item.icon 
                className={cn(
                  'w-5 h-5 transition-transform duration-200',
                  isActive && 'scale-110'
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn(
                'text-[10px] font-medium',
                isActive && 'font-semibold'
              )}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};
