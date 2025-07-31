import { useRef, useState, type FC } from 'react';
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
    onTaskDrop: (
        taskId: string,
        newStatus: MyTask['status'],
        newPosition?: number
    ) => void;
    onTaskHover?: (
        taskId: string,
        status: MyTask['status'],
        position: number
    ) => void;
    placeholderIndex?: number | null;
}

const Desk: FC<DeskProps> = ({
    children,
    widthPercent,
    background,
    deskTitle,
    status,
    onTaskDrop,
    onTaskHover,
    placeholderIndex = null,
}) => {
    const dropRef = useRef<HTMLDivElement>(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TASK',
        hover: (item: { id: string }, monitor) => {
            if (!dropRef.current || !onTaskHover) return;

            const dropOffset = monitor.getClientOffset();
            if (!dropOffset) return;

            const descRect = dropRef.current.getBoundingClientRect();
            const cursorY = dropOffset.y - descRect.top;
            const taskElements = dropRef.current.querySelectorAll('.task');

            let newPlaceholderIndex = taskElements.length;

            for (let i = 0; i < taskElements.length; i++) {
                const taskRect = taskElements[i].getBoundingClientRect();
                const taskMiddleY =
                    taskRect.top - descRect.top + taskRect.height / 2;

                if (cursorY < taskMiddleY) {
                    newPlaceholderIndex = i;
                    break;
                }
            }

            onTaskHover(item.id, status, newPlaceholderIndex);
        },
        drop: (item: { id: string }, monitor) => {
            onTaskDrop(item.id, status, placeholderIndex ?? undefined);
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
