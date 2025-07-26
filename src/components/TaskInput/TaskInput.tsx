import { useState, type ChangeEvent } from 'react';
import { Button } from '../../styled-components/Button';
import { Flex } from '../../styled-components/Flex';
import Input from '../Input/Input';
import { useTasksContext } from '../../contexts/TaskContext';

const TaskInputBlock = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const { addTask } = useTasksContext();

    const addTaskHandler = () => {
        if (!inputValue.trim()) return;
        addTask(inputValue);
        setInputValue('');
    };

    const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const inputKeyDownHandler = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            return addTaskHandler();
        }
    };

    return (
        <Flex $align="center" $gap="15px">
            <Input
                placeholder="Add a task"
                type="text"
                value={inputValue}
                onChange={inputChangeHandler}
                onKeyDown={(e) => e.key === 'Enter' && addTaskHandler()}
            />
            <Button $size="medium" onClick={addTaskHandler}>
                Add
            </Button>
        </Flex>
    );
};

export default TaskInputBlock;
