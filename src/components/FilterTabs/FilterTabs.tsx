import { FilterTab } from '../../styled-components/FilterTab';
import { Flex } from '../../styled-components/Flex';

const FilterTabs = () => {
    return (
        <Flex $align="center" $justify="center" $gap="10px">
            <FilterTab>All</FilterTab>
            <FilterTab>Active</FilterTab>
            <FilterTab>Completed</FilterTab>
        </Flex>
    );
};

export default FilterTabs;
