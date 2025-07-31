import { useRef, useState, type FC } from 'react';
import styled from 'styled-components';
import GrabbleZone from '../GrabableZone/GrabbleZone';
import DeleteTask from '../DeleteTask/DeleteTask';
import { useDrag } from 'react-dnd';
import type { MyTask } from '../../models/MyTask';
import DoneTaskIcon from '../DoneTaskIcon/DoneTaskIcon';

const StyledTask = styled.div`
    position: relative;
    padding: 5px 10px 22px 30px;
    width: 100%;
    max-height: 1000px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};

    font-weight: 400;
    font-size: 16px;
    user-select: none;
    color: ${({ theme }) => theme.colors.primaryTextColor};

    &:not(.dragging) {
        transition: transform 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease;
    }

    &.dragging {
        opacity: .6;
    }

    &.deleted {
        transform: scale(0) rotate(15deg);
        opacity: 0;
    }
`;

interface TaskProps {
    children?: React.ReactNode;
    id: string;
    onDelete: (id: string) => void;
    taskStatus: MyTask['status'];
}

const Task: FC<TaskProps> = ({ children, id, onDelete, taskStatus }) => {
    const [deleted, setDeleted] = useState(false);
    const dragRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'TASK',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    // Связывание ссылок
    drag(dragRef);
    preview(previewRef);

    const deleteTaskHandler = (id: string) => {
        setDeleted(true);
        setTimeout(() => {
            onDelete(id);
        }, 300);
    }

    return (
        <div className='task' ref={previewRef}>
            <StyledTask className={`${isDragging ? 'dragging' : ''} ${deleted ? 'deleted' : ''}`}>
                <div ref={dragRef}>
                    <GrabbleZone $taskStatus={taskStatus} />
                    {taskStatus === 'done' && <DoneTaskIcon />}
                </div>
                {children}
                <DeleteTask id={id} onClick={(id) => deleteTaskHandler(id)} />
            </StyledTask>
        </div>
    );
};

export default Task;
