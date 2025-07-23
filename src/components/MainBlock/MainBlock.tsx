import styled from 'styled-components';
import { Flex } from '../../styled-components/Flex';
import TaskInputBlock from '../TaskInput/TaskInput';
import FilterTabs from '../FilterTabs/FilterTabs';
import GeneralDesk from '../GeneralDesk/GeneralDesk';

const StyledMainBlock = styled.div`
    padding: 30px 40px;

    min-width: 800px;

    border-radius: 25px;
    box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.1);
    background: ${({ theme }) => theme.colors.todoListBg};
`;

const MainTitle = styled.h1`
    text-align: center;
    font-weight: 600;
    font-size: 42px;

    color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

const MainBlock = () => {
    return (
        <StyledMainBlock>
            <Flex $direction="column" $gap="20px">
                <MainTitle>My Tasks</MainTitle>
                <TaskInputBlock />
                <FilterTabs />
                <GeneralDesk />
            </Flex>
        </StyledMainBlock>
    );
};

export default MainBlock;
