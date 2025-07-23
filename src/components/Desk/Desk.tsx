import type { FC } from 'react';
import { StyledDesk, StyledDeskTitle } from './styles';

interface DeskProps {
    widthPercent: '20%' | '25%' | '33.3333%' | '50%' | '100%';
    background?: 'light' | 'dark';
    children?: React.ReactNode;
    deskTitle: string;
}

const Desk: FC<DeskProps> = ({
    children,
    widthPercent,
    background,
    deskTitle,
}) => {
    return (
        <StyledDesk $widthPercent={widthPercent} $background={background}>
            <StyledDeskTitle>{deskTitle}</StyledDeskTitle>
            {children}
        </StyledDesk>
    );
};

export default Desk;
