import { useRef, type InputHTMLAttributes } from 'react';
import { ClearButton, InputWrapper, StyledInput } from './styles';

interface InputProps {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const Input = (props: InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        props.setInputValue('');
        inputRef.current?.focus();
    };

    return (
        <InputWrapper>
            <StyledInput
                ref={inputRef}
                value={props.inputValue}
                onChange={(e) => props.setInputValue(e.target.value)}
                {...props}
            />
            <ClearButton $visible={!!props.inputValue} onClick={clearInput} />
        </InputWrapper>
    );
};

export default Input;
