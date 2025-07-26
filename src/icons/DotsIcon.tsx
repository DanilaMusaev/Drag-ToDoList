import React from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../styles/icon-styles';

interface DotsIconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
}

const StyledDotsIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 21 34',
})`
    ellipse {
        fill: ${(p) => p.color || p.theme.colors.primaryTextColor};
        transition: transform 0.2s ease;
    }

    &:hover {
        cursor: grab;
    }
`;

export const DotsIcon: React.FC<DotsIconProps> = ({
    size = 19,
    className,
    onClick,
}) => {
    const height = size * (34 / 21);

    return (
        <StyledDotsIcon
            $size={size}
            height={height}
            className={`dots-icon ${className}`}
            onClick={onClick}
            $clickable={!!onClick}
            aria-label="Drag handle"
        >
            <ellipse cx="4" cy="4" rx="4" ry="4" />
            <ellipse cx="17" cy="4" rx="4" ry="4" />
            <ellipse cx="4" cy="17" rx="4" ry="4" />
            <ellipse cx="17" cy="17" rx="4" ry="4" />
            <ellipse cx="4" cy="30" rx="4" ry="4" />
            <ellipse cx="17" cy="30" rx="4" ry="4" />
        </StyledDotsIcon>
    );
};
