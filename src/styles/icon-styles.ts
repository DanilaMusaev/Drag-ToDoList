import styled from 'styled-components';

interface IconWrapperProps {
    $size: number;
    $clickable?: boolean;
}

export const IconWrapper = styled.svg<IconWrapperProps>`
    width: ${(p) => p.$size}px;
    height: ${(p) => p.$size}px;
    cursor: ${(p) => (p.$clickable ? 'pointer' : 'inherit')};
    outline: none;
    transition: all 0.2s ease;
`;
