import { Button } from '../../styled-components/Button';
import { Flex } from '../../styled-components/Flex';
import Input from '../Input/Input';

const TaskInputBlock = () => {
    return (
        <Flex $align="center" $gap="15px">
            <Input placeholder="Add a task" type="text" />
            <Button $size="medium">Add</Button>
        </Flex>
    );
};

export default TaskInputBlock;
