import { createContext, useContext } from 'react';
import useTasks from '../hooks/UseTasks';

const TasksContext = createContext<ReturnType<typeof useTasks> | null>(null);

/**
 * Кастомный провайдер контекста состояния задач
 */
export const TasksProvider = ({ children }: { children: React.ReactNode }) => {
    const tasks = useTasks();
    return (
        <TasksContext.Provider value={tasks}>{children}</TasksContext.Provider>
    );
};

/**
 * Кастомный хук для контекста задач и функций работы с ними
 */
export const useTasksContext = () => {
    const context = useContext(TasksContext);
    if (!context)
        throw new Error('useTasksContext must be used within a TasksProvider');
    return context;
};
