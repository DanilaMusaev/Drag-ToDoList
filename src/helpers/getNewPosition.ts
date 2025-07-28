import type { MyTask } from '../models/MyTask';

/**
 * Вспомогательная функция для пересчета позиции задач, после перемещения другой задачи
 */
const getNewPosition = (
    task: MyTask,
    movedTask: MyTask,
    newStatus: MyTask['status'],
    targetPos: number
) => {
    if (task.id === movedTask.id) {
        return targetPos;
    }

    // Коррекция позиций других задач
    if (task.status === movedTask.status && task.status !== newStatus) {
        return task.position > movedTask.position
            ? task.position - 1
            : task.position;
    }

    if (task.status === newStatus && task.position >= targetPos) {
        return task.position + 1;
    }

    return task.position;
};

export default getNewPosition;