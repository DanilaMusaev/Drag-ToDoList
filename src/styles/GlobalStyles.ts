import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: ${({ theme }) => theme.colors.primaryTextColor};
        
        background-color: ${({ theme }) => theme.colors.mainBgColor};
    }
`;
