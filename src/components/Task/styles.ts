import styled, { css } from 'styled-components';

export const TaskContainer = styled.div<{ $isOver?: boolean }>`
    position: relative;
    margin-bottom: ${({ $isOver }) => ($isOver ? '60px' : '10px')};
    transition: all 0.3s ease;

    ${({ $isOver }) =>
        $isOver &&
        css`
            box-shadow: 0px 8px 10px 0px rgba(0, 0, 0, 0.7);
        `}
`;

export const StyledTask = styled.div<{ $isOver?: boolean }>`
    position: relative;
    padding: 5px 10px 22px 30px;
    width: 100%;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};

    font-weight: 400;
    font-size: 16px;
    user-select: none;
    color: ${({ theme }) => theme.colors.primaryTextColor};

    transition: transform 0.3s ease, opacity 0.3s ease, margin-bottom 0.3s ease,
        box-shadow 0.3s ease;

    &.dragging {
        opacity: 0.5;
        transform: scale(0.98);
    }
`;
