import type { FC } from 'react';
import styled from 'styled-components';

const StyledTask = styled.div`
    position: relative;
    padding: 10px 10px 10px 30px;
    width: 100%;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};

    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primaryTextColor};
`;

interface TaskProps {
    children?: React.ReactNode;
}

const Task: FC<TaskProps> = ({ children }) => {
    return <StyledTask>{children}</StyledTask>;
};

export default Task;
