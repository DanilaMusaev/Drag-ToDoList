import styled from 'styled-components';
import Desk from '../Desk/Desk';
import { useState, type FC } from 'react';
import Task from '../Task/Task';
import type { MyTask } from '../../models/MyTask';
import { useTasksContext } from '../../contexts/TaskContext';

const StyledGeneralDesk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;

    min-height: 350px;
    overflow: hidden;

    border-radius: 25px;
    background: ${({ theme }) => theme.colors.mainBgColor};
`;

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

    const handlerTaskHover = (
        taskId: string,
        status: MyTask['status'],
        position: number
    ) => {
        setHoverState({ status, position });
    };

    const handleTaskDrop = (
        taskId: string,
        newStatus: MyTask['status'],
        newPosition?: number
    ) => {
        moveTask(taskId, newStatus, newPosition);
        setHoverState(null);
    };
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
                        placeholderIndex={
                            showPlaceholder ? placeHolderPos : null
                        }
                    >
                        {filteredTasks.flatMap((task, index) => [
                            showPlaceholder && placeHolderPos === index && (
                                <div
                                    key={`placeholder-${status}-${index}`}
                                    style={{
                                        height: '4px',
                                        background: '#1890ff',
                                        margin: '4px 0',
                                        borderRadius: '2px',
                                    }}
                                />
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
