import { Flex } from '../../styled-components/Flex';
import TaskInputBlock from '../TaskInput/TaskInput';
import FilterTabs from '../FilterTabs/FilterTabs';
import GeneralDesk from '../GeneralDesk/GeneralDesk';
import { MainTitle, StyledMainBlock } from './styles';

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
