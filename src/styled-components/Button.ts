import styled, { css } from 'styled-components';

type ButtonProps = {
    $variant?: 'primary' | 'secondary' | 'outline' | 'text';
    $size?: 'small' | 'medium' | 'standard';
    $fullWidth?: boolean;
    disabled?: boolean;
};

export const Button = styled.button.attrs<ButtonProps>((props) => ({
    type: props.type || 'button',
}))<ButtonProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.BtnFont};
    cursor: pointer;
    border: none;
    outline: none;
    position: relative;
    text-align: center;
    text-decoration: none;
    
    transition: all 0.3s ease;

    ${({ $size: size }) => {
        switch (size) {
            case 'small':
                return css`
                    padding: 8px 16px;
                    font-size: 14px;
                `;
            case 'medium':
                return css`
                    font-size: 19px;
                    padding: 8px 20px;
                `;
            default: // standard
                return css`
                    padding: 12px 24px;
                `;
        }
    }}

    // Color variants
  ${({ $variant: variant, theme }) => {
        switch (variant) {
            case 'secondary':
                return css`
                    background: ${theme.colors.bgColorDarken};
                    color: ${theme.colors.primaryTextColor};
                `;
            case 'outline':
                return css`
                    background: transparent;
                    color: ${theme.colors.accentColor};
                    border: 1px solid ${theme.colors.accentColor};
                `;
            case 'text':
                return css`
                    background: transparent;
                    color: ${theme.colors.accentColor};
                    padding: 0;
                    border-radius: 0;
                `;
            default: // primary
                return css`
                    background: ${theme.colors.accentColor};
                    color: ${theme.colors.pureWhiteColor};
                `;
        }
    }}

  ${({ $fullWidth: fullWidth }) =>
        fullWidth &&
        css`
            width: 100%;
        `}

  ${({ disabled }) =>
        disabled &&
        css`
            opacity: 0.6;
            cursor: not-allowed;
        `}

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
        ${({ $variant: variant, theme }) => {
            switch (variant) {
                case 'outline':
                    return css`
                        background: ${theme.colors.accentColor}10;
                    `;
                case 'text':
                    return css`
                        text-decoration: underline;
                    `;
                default:
                    return css`
                        filter: brightness(1.1);
                    `;
            }
        }}
    }

    &:active:not(:disabled) {
        transform: scale(0.98);
    }
`;
