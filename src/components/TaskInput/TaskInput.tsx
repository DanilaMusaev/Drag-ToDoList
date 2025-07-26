import { useState, type KeyboardEvent } from 'react';
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

    const inputKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            return addTaskHandler();
        }
    };

    return (
        <Flex $align="center" $gap="15px">
            <Input
                placeholder="Add a task"
                type="text"
                inputValue={inputValue}
                setInputValue={setInputValue}
                onKeyDown={inputKeyDownHandler}
            />
            <Button $size="medium" onClick={addTaskHandler}>
                Add
            </Button>
        </Flex>
    );
};

export default TaskInputBlock;
