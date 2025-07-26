import { useRef, type FC } from 'react';
import styled from 'styled-components';
import GrabbleZone from '../GrabableZone/GrabbleZone';
import DeleteTask from '../DeleteTask/DeleteTask';
import { useDrag } from 'react-dnd';

const StyledTask = styled.div`
    position: relative;
    padding: 5px 10px 15px 30px;
    width: 100%;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};

    font-weight: 400;
    font-size: 16px;
    user-select: none;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

interface TaskProps {
    children?: React.ReactNode;
    id: string;
    onDelete: (id: string) => void;
}

const Task: FC<TaskProps> = ({ children, id, onDelete }) => {
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
            <StyledTask style={{ opacity: isDragging ? 0.5 : 1 }}>
                <div ref={dragRef}>
                    <GrabbleZone />
                </div>
                {children}
                <DeleteTask id={id} onClick={(id) => onDelete(id)} />
            </StyledTask>
        </div>
    );
};

export default Task;
