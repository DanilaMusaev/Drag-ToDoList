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
                position: prev.filter((todo) => todo.status === 'todo').length,
            },
        ]);
    }, []);
    // Функция по перемещения задачи
    const moveTask = useCallback(
        (id: string, newStatus: MyTask['status'], newPosition?: number) => {
            setTasks((prev) => {
                console.log(`MOVETASK. New position: ${newPosition}`);
                const taskToMove = prev.find((t) => t.id === id);
                if (!taskToMove) return prev;

                const tasksInNewStatus = prev.filter(
                    (t) => t.status === newStatus
                );
                const targetPosition = Math.min(
                    newPosition !== undefined
                        ? newPosition
                        : tasksInNewStatus.length,
                    tasksInNewStatus.length
                );

                return prev.map((task) => {
                    if (task.id === id) {
                        return {
                            ...task,
                            status: newStatus,
                            position: targetPosition,
                        };
                    }
                    if (
                        task.status === taskToMove.status &&
                        task.status !== newStatus
                    ) {
                        return {
                            ...task,
                            position:
                                task.position > taskToMove.position
                                    ? task.position - 1
                                    : task.position,
                        };
                    }
                    if (task.status === newStatus) {
                        if (taskToMove.status === newStatus) {
                            if (taskToMove.position < targetPosition) {
                                if (
                                    task.position > taskToMove.position &&
                                    task.position <= targetPosition
                                ) {
                                    return {
                                        ...task,
                                        position: task.position - 1,
                                    };
                                }
                            } else {
                                if (
                                    task.position >= targetPosition &&
                                    task.position < taskToMove.position
                                ) {
                                    return {
                                        ...task,
                                        position: task.position + 1,
                                    };
                                }
                            }
                        } else {
                            if (task.position >= targetPosition) {
                                return { ...task, position: task.position + 1 };
                            }
                        }
                    }
                    return task;
                });
            });
        },
        []
    );

    const deleteTask = useCallback((id: string) => {
        // setTasks((prev) => prev.filter((task) => task.id !== id));
        setTasks((prev) => {
            const deletedTask = prev.find((tsk) => tsk.id === id);
            if (!deletedTask) return prev;

            return prev
                .filter((tsk) => tsk.id !== id)
                .map((tsk) => {
                    if (
                        tsk.status === deletedTask.status &&
                        tsk.position > deletedTask.position
                    ) {
                        return { ...tsk, position: tsk.position - 1 };
                    }
                    return tsk;
                });
        });
    }, []);

    return { tasks, addTask, moveTask, deleteTask };
};

export default useTasks;
