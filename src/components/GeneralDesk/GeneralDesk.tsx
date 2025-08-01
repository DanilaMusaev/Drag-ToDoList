import Desk from '../Desk/Desk';
import { useCallback, useState, type FC } from 'react';
import Task from '../Task/Task';
import type { MyTask } from '../../models/MyTask';
import { useTasksContext } from '../../contexts/TaskContext';
import { TaskPlaceholder } from '../../styled-components/TaskPlaceholder';
import { StyledGeneralDesk } from './styles';

type DeskConfig = {
    status: MyTask['status'];
    title: string;
    background?: 'light' | 'dark';
};

const GeneralDesk: FC = () => {
    const { tasks, moveTask, deleteTask } = useTasksContext();
    const [hoverState, setHoverState] = useState<{
        status: MyTask['status'];
        position: number;
    } | null>(null);

    const handlerTaskHover = useCallback(
        (status: MyTask['status'], position: number) => {
            setHoverState({ status, position });
        },
        []
    );

    const handleTaskDrop = useCallback(
        (taskId: string, newStatus: MyTask['status'], newPosition?: number) => {
            moveTask(taskId, newStatus, newPosition);
            setHoverState(null);
        },
        [hoverState, moveTask]
    );
    // Доски
    const statusConfig: DeskConfig[] = [
        { status: 'todo', title: 'To Do', background: 'dark' as const },
        { status: 'inProgress', title: 'In Progress' },
        { status: 'done', title: 'Done', background: 'dark' as const },
    ];
    return (
        <StyledGeneralDesk>
            {statusConfig.map(({ status, title, background }) => {
                const filteredTasks = tasks
                    .filter((task) => task.status === status)
                    .sort((a, b) => a.position - b.position);
                const showPlaceholder = hoverState?.status === status;
                const placeHolderPos = hoverState?.position ?? 0;

                return (
                    <Desk
                        key={status}
                        deskTitle={title}
                        widthPercent="33.3333%"
                        background={background}
                        status={status}
                        onTaskDrop={handleTaskDrop}
                        onTaskHover={handlerTaskHover}
                    >
                        {filteredTasks.flatMap((task, index) => [
                            showPlaceholder && placeHolderPos === index && (
                                <TaskPlaceholder key={`ph-${status}-${index}`} />
                            ),
                            <Task
                                key={task.id}
                                id={task.id}
                                onDelete={deleteTask}
                                taskStatus={task.status}
                            >
                                {task.text}
                            </Task>,
                        ])}
                    </Desk>
                );
            })}
        </StyledGeneralDesk>
    );
};

export default GeneralDesk;
