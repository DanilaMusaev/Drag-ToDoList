import React from 'react';
import styled from 'styled-components';
import { IconWrapper } from '../styles/icon-styles';

interface TrashIconProps {
    size?: number;
    circleColor?: string;
    fillColor?: string;
    className?: string;
}

interface StyledTrashIconProps {
    $circleColor?: string;
    $fillColor?: string;
}

const StyledTrashIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 43 43',
})<StyledTrashIconProps>`
    cursor: pointer;

    circle {
        fill: ${(p) => p.$circleColor || p.theme.colors.warningColor};
    }

    path {
        stroke: ${(p) => p.$fillColor || p.theme.colors.pureWhiteColor};
        stroke-width: 3;
        stroke-linecap: 'round';
        stroke-linejoin: 'round';
        fill: transparent
    }
`;

export const TrashIcon: React.FC<TrashIconProps> = ({
    size = 20,
    circleColor,
    fillColor,
    className,
}) => {
    return (
        <StyledTrashIcon
            $size={size}
            $circleColor={circleColor}
            $fillColor={fillColor}
            className={`check-icon ${className}`}
            aria-hidden="true"
        >
            <circle cx="21.5" cy="21.5" r="21.5" />
            <path
                d="M29.3386 13.3864L28.3375 28.4025C28.2499 29.7176 28.206 30.3752 27.922 30.8739C27.6719 31.3129 27.2946 31.6657 26.84 31.8861C26.3236 32.1364 25.6645 32.1364 24.3464 32.1364H19.3308C18.0127 32.1364 17.3536 32.1364 16.8372 31.8861C16.3826 31.6657 16.0054 31.3129 15.7553 30.8739C15.4712 30.3752 15.4274 29.7176 15.3397 28.4025L14.3386 13.3864M11.8386 13.3864H31.8386M26.8386 13.3864L26.5004 12.3714C26.1725 11.3879 26.0085 10.8962 25.7045 10.5326C25.436 10.2115 25.0912 9.96301 24.7017 9.80984C24.2606 9.63636 23.7424 9.63636 22.7056 9.63636H20.9716C19.9349 9.63636 19.4166 9.63636 18.9755 9.80984C18.586 9.96301 18.2412 10.2115 17.9727 10.5326C17.6687 10.8962 17.5048 11.3879 17.1769 12.3714L16.8386 13.3864"
            />
        </StyledTrashIcon>
    );
};
