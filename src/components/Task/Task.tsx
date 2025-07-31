import { useRef, type FC } from 'react';
import GrabbleZone from '../GrabableZone/GrabbleZone';
import DeleteTask from '../DeleteTask/DeleteTask';
import { useDrag } from 'react-dnd';
import type { MyTask } from '../../models/MyTask';
import DoneTaskIcon from '../DoneTaskIcon/DoneTaskIcon';
import { StyledTask, TaskContainer } from './styles';

interface TaskProps {
    children?: React.ReactNode;
    id: string;
    onDelete: (id: string) => void;
    taskStatus: MyTask['status'];
    $isOver?: boolean;
}

const Task: FC<TaskProps> = ({ children, id, onDelete, taskStatus, $isOver = false }) => {
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
        <TaskContainer $isOver={$isOver} className="task" ref={previewRef}>
            <StyledTask className={`${isDragging ? 'dragging' : ''}`}>
                <div ref={dragRef}>
                    <GrabbleZone $taskStatus={taskStatus} />
                    {taskStatus === 'done' && <DoneTaskIcon />}
                </div>
                {children}
                <DeleteTask id={id} onClick={(id) => onDelete(id)} />
            </StyledTask>
        </TaskContainer>
    );
};

export default Task;
