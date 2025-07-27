import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconWrapper } from '../styles/icon-styles';

interface DotsIconProps {
    size?: number;
    color?: string;
    className?: string;
    onClick?: () => void;
    $isDone: boolean;
}

const convergeAnimation = keyframes`
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }
    70% {
        transform: translate(0, 0);
        opacity: 1;
    }
    100% {
        transform: translate(0, 0);
        opacity: 0;
    }
`;

const StyledDotsIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 21 34',
})`
    ellipse {
        fill: ${(p) => p.color || p.theme.colors.primaryTextColor};
        transform-box: fill-box;
        transform-origin: center;
    }

    &:hover {
        cursor: grab;
    }

    &.disapp {
        ellipse {
            animation: ${convergeAnimation} 0.8s forwards;
        }

        ellipse:nth-child(1) {
            animation-delay: 0.35s;
            transform-origin: -4px -4px;
        }
        ellipse:nth-child(2) {
            animation-delay: 0.3s;
            transform-origin: 13px -4px;
        }
        ellipse:nth-child(3) {
            animation-delay: 0.25s;
            transform-origin: -4px 13px;
        }
        ellipse:nth-child(4) {
            animation-delay: 0.2s;
            transform-origin: 13px 13px;
        }
        ellipse:nth-child(5) {
            animation-delay: 0.15s;
            transform-origin: -4px 26px;
        }
        ellipse:nth-child(6) {
            animation-delay: 0.1s;
            transform-origin: 13px 26px;
        }
    }
`;

export const DotsIcon: React.FC<DotsIconProps> = ({
    size = 19,
    className,
    onClick,
    $isDone,
}) => {
    const height = size * (34 / 21);

    return (
        <StyledDotsIcon
            $size={size}
            height={height}
            className={`dots-icon ${className} ${$isDone ? 'disapp' : ''}`}
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
