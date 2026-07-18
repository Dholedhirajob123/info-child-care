import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AppLayout } from "@/components/AppLayout";

import Index from "./pages/Index";
import Topics from "./pages/Topics";
import TopicDetail from "./pages/TopicDetail";
import Tracker from "./pages/Tracker";
import Vaccination from "./pages/Vaccination";
import Tips from "./pages/Tips";
import Quiz from "./pages/Quiz";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminSurvey from "./pages/AdminSurvey";
import { AdminProtected } from "./components/AdminProtected";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <HashRouter>
            <AppLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/topics" element={<Topics />} />
                <Route path="/topics/:topicId" element={<TopicDetail />} />
                <Route path="/tracker" element={<Tracker />} />
                <Route path="/vaccination" element={<Vaccination />} />
                <Route path="/tips" element={<Tips />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminProtected><AdminDashboard /></AdminProtected>} />
                <Route path="/admin/survey/:id" element={<AdminProtected><AdminSurvey /></AdminProtected>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppLayout>
          </HashRouter>

        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
