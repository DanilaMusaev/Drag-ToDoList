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
        fill: ${(p) => p.color};
        transition: transform 0.2s ease;
    }

    &:hover ellipse {
        transform: scale(1.1);
    }
`;

export const DotsIcon: React.FC<DotsIconProps> = ({
    size = 21,
    color = '#111827',
    className,
    onClick,
}) => {
    const height = size * (34 / 21);

    return (
        <StyledDotsIcon
            $size={size}
            height={height}
            color={color}
            className={`dots-icon ${className}`}
            onClick={onClick}
            $clickable={!!onClick}
            aria-label="Drag handle"
        >
            <ellipse cx="3.97288" cy="4" rx="3.97288" ry="4" />
            <ellipse cx="16.8847" cy="4" rx="3.97288" ry="4" />
            <ellipse cx="3.97288" cy="17" rx="3.97288" ry="4" />
            <ellipse cx="16.8847" cy="17" rx="3.97288" ry="4" />
            <ellipse cx="3.97288" cy="30" rx="3.97288" ry="4" />
            <ellipse cx="16.8847" cy="30" rx="3.97288" ry="4" />
        </StyledDotsIcon>
    );
};
