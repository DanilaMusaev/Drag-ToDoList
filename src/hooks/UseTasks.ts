import { useCallback, useEffect, useState } from 'react';
import { type MyTask } from '../models/MyTask';

// Хук для управления задачами
const useTasks = () => {
    // Начальное состояние для задач
    const [tasks, setTasks] = useState<MyTask[]>(() => {
        const saved = localStorage.getItem('tasks');
        return saved ? JSON.parse(saved) : [];
    });
    // Сохранение в LocalStorage при каждом изменении состояния задач
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    // Функция добавления новых задач
    const addTask = useCallback((text: string) => {
        // Проверка, что текст не пустой
        if (!text.trim()) return;
        setTasks((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                text,
                status: 'todo' as const,
            },
        ]);
    }, []);
    // Функция по перемещения задачи (меняет статус для задачи)
    const moveTask = useCallback((id: string, newStatus: MyTask['status']) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task
            )
        );
    }, []);

    const deleteTask = useCallback((id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }, []);

    return { tasks, addTask, moveTask, deleteTask };
};

export default useTasks;
