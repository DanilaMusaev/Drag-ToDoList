import styled from 'styled-components';
import Desk from '../Desk/Desk';
import { type FC } from 'react';
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
    // Доски
    const statusConfig: DeskConfig[] = [
        { status: 'todo', title: 'To Do', background: 'dark' as const },
        { status: 'inProgress', title: 'In Progress' },
        { status: 'done', title: 'Done', background: 'dark' as const },
    ];
    return (
        <StyledGeneralDesk>
            {statusConfig.map(({ status, title, background }) => (
                <Desk
                    key={status}
                    deskTitle={title}
                    widthPercent="33.3333%"
                    background={background}
                    status={status}
                    onTaskDrop={moveTask}
                >
                    {tasks
                        .filter((task) => task.status === status)
                        .map((task) => (
                            <Task
                                key={task.id}
                                id={task.id}
                                onDelete={deleteTask}
                                taskStatus={task.status}
                            >
                                {task.text}
                            </Task>
                        ))}
                </Desk>
            ))}
        </StyledGeneralDesk>
    );
};

export default GeneralDesk;
