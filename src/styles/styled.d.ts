import 'styled-components';

// Расширение класса DefaultTheme автокомплита theme
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            mainBgColor: string;
            todoListBg: string;
            accentColor: string;
            successColor: string;
            warningColor: string;
            primaryTextColor: string;
            secondaryTextColor: string;
            lightblueColor: string;
            pureWhiteColor: string;
            bgColorDarken: string;
            inputPlaceholderText: string;
        };
        fontSizes: {
            TitleFont: string;
            BtnFont: string;
            DeskTitleFont: string;
            SmTabsFont: string;
            PlaceholderFont: string;
        };
    }
}
