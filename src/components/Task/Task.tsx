import { useRef, type FC } from 'react';
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

    transition: transform 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease;

    &.dragging {
        opacity: 0.5;
        transform: scale(0.98);
    }
`;

interface TaskProps {
    children?: React.ReactNode;
    id: string;
    onDelete: (id: string) => void;
    taskStatus: MyTask['status'];
}

const Task: FC<TaskProps> = ({ children, id, onDelete, taskStatus }) => {
    const previewRef = useRef<HTMLDivElement>(null);
    const dragRef = useRef<HTMLDivElement>(null);
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: 'TASK',
        item: { id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    // Связывание ссылок
    drag(dragRef);
    dragPreview(previewRef);

    return (
        <div ref={previewRef}>
            <StyledTask className={`${isDragging ? 'dragging' : ''}`}>
                <div ref={dragRef}>
                    <GrabbleZone $taskStatus={taskStatus} />
                    {taskStatus === 'done' && <DoneTaskIcon />}
                </div>
                {children}
                <DeleteTask id={id} onClick={(id) => onDelete(id)} />
            </StyledTask>
        </div>
    );
};

export default Task;
