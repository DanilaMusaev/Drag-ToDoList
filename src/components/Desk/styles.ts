import { styled } from 'styled-components';

interface StyledDeskProps {
    $widthPercent: '20%' | '25%' | '33.3333%' | '50%' | '100%';
    $background?: 'light' | 'dark';
}

export const StyledDesk = styled.div<StyledDeskProps>`
    padding: 10px 15px;
    width: ${(props) => props.$widthPercent || '100%'};

    border-radius: 25px;
    background-color: ${({ theme, $background }) =>
        $background === 'dark'
            ? theme.colors.bgColorDarken
            : theme.colors.mainBgColor};
    
    transition: all 0.15s ease;
`;

export const StyledDeskTitle = styled.h3`
    margin-bottom: 20px;
    
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    color: ${({theme}) => theme.colors.primaryTextColor};
`;
