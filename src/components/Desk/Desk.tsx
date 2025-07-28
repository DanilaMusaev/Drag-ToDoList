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
    onTaskDrop: (taskId: string, newStatus: MyTask['status'], newPosition?: number) => void;
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
        drop: (item: { id: string }, monitor) => {
            const dropOffset = monitor.getClientOffset();
            if (!dropOffset || !dropRef.current) return;
            // Границы доски
            const descRect = dropRef.current.getBoundingClientRect();
            const isOutsideCurrentDesk = !monitor.isOver({
                shallow: true
            });
            if (isOutsideCurrentDesk) return;
            // Относительное положение Y курсора в доске
            const cursorY = dropOffset.y - descRect.top;
            const taskElements = dropRef.current.querySelectorAll('.task');
            let newTaskPos;
            if (taskElements.length === 0) {
                newTaskPos = 0;
            } else {
                newTaskPos = taskElements.length - 1;
            }
            // Переопределение позиции в зависимости от положения курсора
            for (let i = 0; i < taskElements.length; i++) {
                const taskRect = taskElements[i].getBoundingClientRect();
                // Середина задачи в отношении с верхней границей доски
                const taskMiddY = taskRect.top - descRect.top + taskRect.height / 2;
                if (cursorY < taskMiddY) {
                    newTaskPos = i;
                    break;
                }
            } 
            onTaskDrop(item.id, status, newTaskPos);
        },
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
