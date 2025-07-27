import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IconWrapper } from '../styles/icon-styles';

interface SuccessIconProps {
    size?: number;
    circleColor?: string;
    fillColor?: string;
    className?: string;
}

interface StyledSuccessIconProps {
    $circleColor?: string;
    $fillColor?: string;
}

const ManifestAnimation = keyframes`
    0% {
        transform: scale(0.7);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
`;

const StyledSuccessIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 38 38',
})<StyledSuccessIconProps>`
    transform: scale(0.7);
    opacity: 0;
    animation: ${ManifestAnimation} 0.5s ease-out 0.8s forwards;
    circle {
        fill: ${(p) => p.$circleColor || p.theme.colors.successColor};
    }

    path {
        fill: ${(p) => p.$fillColor || p.theme.colors.pureWhiteColor};
    }
`;

export const SuccessIcon: React.FC<SuccessIconProps> = ({
    size = 22,
    circleColor,
    fillColor,
    className,
}) => {
    return (
        <StyledSuccessIcon
            $size={size}
            $circleColor={circleColor}
            $fillColor={fillColor}
            className={`check-icon ${className}`}
            aria-hidden="true"
        >
            <circle cx="19" cy="19" r="19" />
            <path d="M31.3174 9.86692C31.697 10.2555 31.697 10.8759 31.3175 11.2644L14.7089 28.2677C14.3166 28.6693 13.6705 28.6693 13.2782 28.2677L6.68261 21.5161C6.30306 21.1275 6.30305 20.5071 6.68259 20.1185L6.78104 20.0177C7.17338 19.6161 7.81941 19.6161 8.21174 20.0177L13.2447 25.1701C13.637 25.5717 14.283 25.5717 14.6754 25.1701L29.7553 9.73233C30.1476 9.33068 30.7936 9.33068 31.186 9.73233C31.2298 9.77719 31.2736 9.82206 31.3174 9.86692Z" />
        </StyledSuccessIcon>
    );
};
