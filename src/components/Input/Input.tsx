import { useRef, useState, type InputHTMLAttributes } from 'react';
import { ClearButton, InputWrapper, StyledInput } from './styles';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        setValue('');
        inputRef.current?.focus();
    };

    return (
        <InputWrapper>
            <StyledInput
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                {...props}
            />
            <ClearButton $visible={!!value} onClick={clearInput} />
        </InputWrapper>
    );
};

export default Input;
