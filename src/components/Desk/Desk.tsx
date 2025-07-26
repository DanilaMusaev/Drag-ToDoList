import { useRef, type FC } from 'react';
import { StyledDesk, StyledDeskTitle } from './styles';
import { useDrop } from 'react-dnd';
import { type MyTask } from '../../models/MyTask';
import { Flex } from '../../styled-components/Flex';

interface DeskProps {
    widthPercent: '20%' | '25%' | '33.3333%' | '50%' | '100%';
    background?: 'light' | 'dark';
    children?: React.ReactNode;
    deskTitle: string;
    status: MyTask['status'];
    onTaskDrop: (taskId: string, newStatus: MyTask['status']) => void;
}

const Desk: FC<DeskProps> = ({
    children,
    widthPercent,
    background,
    deskTitle,
    status,
    onTaskDrop,
}) => {
    const dropRef = useRef<HTMLDivElement>(null);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TASK',
        drop: (item: { id: string }) => onTaskDrop(item.id, status),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    // Связываем ссылку dropRef с drop
    drop(dropRef);

    return (
        <StyledDesk
            $widthPercent={widthPercent}
            $background={background}
            ref={dropRef}
            style={{
                backgroundColor: isOver ? 'rgba(0,0,0,0.05)' : undefined,
                transition: 'background-color 0.15s ease-out',
            }}
        >
            <StyledDeskTitle>{deskTitle}</StyledDeskTitle>
            <Flex $direction="column" $gap="10px">
                {children}
            </Flex>
        </StyledDesk>
    );
};

export default Desk;
