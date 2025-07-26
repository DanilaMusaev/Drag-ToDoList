import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme.ts';
import { ResetStyles } from './styles/ResetStyles.ts';
import { GlobalStyle } from './styles/GlobalStyles.ts';
import { TasksProvider } from './contexts/TaskContext.tsx';

createRoot(document.getElementById('root')!).render(
    <TasksProvider>
        <ThemeProvider theme={theme}>
            <ResetStyles />
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </TasksProvider>
);
