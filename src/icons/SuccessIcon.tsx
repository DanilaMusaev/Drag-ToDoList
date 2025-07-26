import React from 'react';
import styled from 'styled-components';
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

const StyledSuccessIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 38 38',
})<StyledSuccessIconProps>`
    circle {
        fill: ${(p) => p.$circleColor || p.theme.colors.successColor};
    }

    path {
        fill: ${(p) => p.$fillColor || p.theme.colors.pureWhiteColor};
    }
`;

export const SuccessIcon: React.FC<SuccessIconProps> = ({
    size = 24,
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
            <path d="M26.3174 4.86692C26.697 5.25545 26.697 5.8759 26.3175 6.26444L9.70888 23.2677C9.31656 23.6693 8.67053 23.6693 8.27819 23.2677L1.68261 16.5161C1.30306 16.1275 1.30305 15.5071 1.68259 15.1185L1.78104 15.0177C2.17338 14.6161 2.81941 14.6161 3.21174 15.0177L8.24467 20.1701C8.63701 20.5717 9.28304 20.5717 9.67537 20.1701L24.7553 4.73233C25.1476 4.33068 25.7936 4.33068 26.186 4.73233C26.2298 4.77719 26.2736 4.82206 26.3174 4.86692Z" />
        </StyledSuccessIcon>
    );
};
