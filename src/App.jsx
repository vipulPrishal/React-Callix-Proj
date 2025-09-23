import { AppRouting } from '@/routing/app-routing';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { LoadingBarContainer } from 'react-top-loading-bar';
import { Toaster } from '@/components/ui/sonner';
import CursorTrail from '@/components/effects/CursorTrail';
import { AuthProvider } from './auth/providers/supabase-provider';
import { I18nProvider } from './providers/i18n-provider';
import { ModulesProvider } from './providers/modules-provider';
import { QueryProvider } from './providers/query-provider';
import { SettingsProvider } from './providers/settings-provider';
import { ThemeProvider } from './providers/theme-provider';
import { TooltipsProvider } from './providers/tooltips-provider';

const { BASE_URL } = import.meta.env;

export function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SettingsProvider>
          <ThemeProvider>
            <I18nProvider>
              <HelmetProvider>
                <TooltipsProvider>
                  <QueryProvider>
                    <LoadingBarContainer>
                      <BrowserRouter basename={BASE_URL}>
                        <Toaster />
                        <ModulesProvider>
                          <AppRouting />
                        </ModulesProvider>
                        {/* Cursor trail - add this line */}
                        <CursorTrail
                          dotSize={12} // bigger dots
                          trailLength={8} // fewer, closer dots
                          fadeMs={300} // faster fade
                        />
                      </BrowserRouter>
                    </LoadingBarContainer>
                  </QueryProvider>
                </TooltipsProvider>
              </HelmetProvider>
            </I18nProvider>
          </ThemeProvider>
        </SettingsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
