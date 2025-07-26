import type { FC } from 'react';
import styled from 'styled-components';
import GrabbleZone from '../GrabableZone/GrabbleZone';
import DeleteTask from '../DeleteTask/DeleteTask';

const StyledTask = styled.div`
    position: relative;
    padding: 5px 10px 15px 30px;
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
    return (
        <StyledTask>
            <GrabbleZone />
            {children}
            <DeleteTask />
        </StyledTask>
    );
};

export default Task;
