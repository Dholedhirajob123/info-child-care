import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, Activity, Syringe, Lightbulb, HelpCircle, Mail, Phone } from 'lucide-react';
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
      {/* Navigation Items */}
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

      {/* Stylish Footer Section */}
      <div className="border-t-2 border-primary/20 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            {/* Company Name */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-medium text-muted-foreground">Created by</span>
              <span className="text-sm font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                DGD
              </span>
            </div>

            {/* Separator */}
            <span className="hidden sm:block text-muted-foreground/30">|</span>

            {/* Phone */}
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-primary/70" />
              <a 
                href="tel:7218298534" 
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                7218298534
              </a>
            </div>

            {/* Separator */}
            <span className="hidden sm:block text-muted-foreground/30">|</span>

            {/* Email */}
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-primary/70" />
              <a 
                href="mailto:developerdgd@gmail.com" 
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                developerdgd@gmail.com
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-1.5">
            <p className="text-[10px] text-muted-foreground/50">
              © {new Date().getFullYear()} DGD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};