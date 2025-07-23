import styled from 'styled-components';
import Desk from '../Desk/Desk';
import type { FC } from 'react';
import Task from '../Task/Task';

const StyledGeneralDesk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;

    min-height: 350px;
    overflow: hidden;

    border-radius: 25px;
    background: ${({ theme }) => theme.colors.mainBgColor};
`;

const GeneralDesk: FC = () => {
    return (
        <StyledGeneralDesk>
            <Desk deskTitle="To Do" widthPercent="33.3333%" background="dark">
                <Task>Task 1</Task>
            </Desk>
            <Desk deskTitle="In Progress" widthPercent="33.3333%"></Desk>
            <Desk
                deskTitle="Done"
                widthPercent="33.3333%"
                background="dark"
            ></Desk>
        </StyledGeneralDesk>
    );
};

export default GeneralDesk;
