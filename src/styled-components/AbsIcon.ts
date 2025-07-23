import styled from 'styled-components';

interface AbsIconProps {
    $top?: `${string}px` | `${string}%`;
    $right?: `${string}px` | `${string}%`;
    $bottom?: `${string}px` | `${string}%`;
    $left?: `${string}px` | `${string}%`;
}

export const AbsIcon = styled.span<AbsIconProps>`
    position: absolute;
    top: ${({ $top }) => $top || 'auto'};
    right: ${({ $right }) => $right || 'auto'};
    bottom: ${({ $bottom }) => $bottom || 'auto'};
    left: ${({ $left }) => $left || 'auto'};
`;
