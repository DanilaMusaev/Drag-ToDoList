import { createContext, useCallback, useRef, useState, type FC } from 'react';
import { StyledDesk, StyledDeskTitle } from './styles';
import { useDrop } from 'react-dnd';
import { type MyTask } from '../../models/MyTask';
import { Flex } from '../../styled-components/Flex';
import React from 'react';

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
}

// Контекст, для пробрасывания значения isOver в children
const IsOverContext = createContext<{isOver?: boolean}>({});

const Desk: FC<DeskProps> = ({
    children,
    widthPercent,
    background,
    deskTitle,
    status,
    onTaskDrop,
}) => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const dropRef = useRef<HTMLDivElement>(null);
    const hoverIndexRef = useRef<number | null>(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'TASK',
        hover: (item: { id: string }, monitor) => {
            if (!dropRef.current) return;

            const offset = monitor.getClientOffset();
            if (!offset) return;

            const { top } = dropRef.current.getBoundingClientRect();
            const cursorY = offset.y - top;
            const tasks = Array.from(dropRef.current.querySelectorAll('.task'));

            let newHoverIndex = tasks.length;

            for (let i = 0; i < tasks.length; i++) {
                const task = tasks[i];
                const taskRect = task.getBoundingClientRect();
                const taskBottom = taskRect.top - top + taskRect.height;

                if (cursorY < taskBottom) {
                    newHoverIndex = i;
                    break;
                }
            }

            if (hoverIndexRef.current !== newHoverIndex) {
                hoverIndexRef.current = newHoverIndex;
                setHoverIndex(newHoverIndex);
            }
        },
        drop: (item: { id: string }, monitor) => {
            const finalPosition = hoverIndexRef.current ?? 0; // Гарантируем минимум 0
            console.log('Dropping at position:', finalPosition);
            onTaskDrop(item.id, status, finalPosition);
            hoverIndexRef.current = null;
            setHoverIndex(null);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
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
            <Flex $direction="column">
                <IsOverContext.Provider value={{isOver: isOver && hoverIndex === index}}>
                    {children}
                </IsOverContext.Provider>
            </Flex>
        </StyledDesk>
    );
};

export default Desk;
