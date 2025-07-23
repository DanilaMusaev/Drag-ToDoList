import styled from 'styled-components';

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`;

export const StyledInput = styled.input`
    padding: 8px 15px;
    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.lightblueColor};
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};

    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primaryTextColor};

    transition: all 0.15s ease-out;

    &::placeholder {
        font-weight: 300;
        color: ${({ theme }) => theme.colors.inputPlaceholderText};
    }

    &:focus {
        box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.accentColor}75;
    }
`;

export const ClearButton = styled.span<{ $visible: boolean }>`
    position: absolute;
    display: block;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);

    width: 10px;
    height: 10px;

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    pointer-events: ${({ $visible }) => ($visible ? 'all' : 'none')};

    cursor: pointer;
    user-select: none;
    transition: opacity 0.2s;

    &::after,
    &::before {
        content: "";
        position: absolute;
        top: 45%;

        width: 10px;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.lightblueColor};
    }

    &::after {
        transform: rotateZ(-45deg);
    }
    &::before {
        transform: rotateZ(45deg);
    }
`;
