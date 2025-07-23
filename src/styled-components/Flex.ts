import styled from 'styled-components';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type FlexAlign = 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
type FlexJustify =
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

interface FlexProps {
    $direction?: FlexDirection;
    $align?: FlexAlign;
    $justify?: FlexJustify;
    $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    $gap?: `${string}px` | `${string}em` | `${string}rem`;
    $inline?: boolean;
    $fullWidth?: boolean;
    $fullHeight?: boolean;
    $grow?: boolean;
    $minHeight?: `${string}px` | `${string}vh` | `${string}%`;
}

export const Flex = styled.div<FlexProps>`
    display: ${(props) => (props.$inline ? 'inline-flex' : 'flex')};
    flex-direction: ${(props) => props.$direction || 'row'};
    align-items: ${(props) => props.$align || 'stretch'};
    justify-content: ${(props) => props.$justify || 'flex-start'};
    flex-wrap: ${(props) => props.$wrap || 'nowrap'};
    gap: ${(props) => props.$gap || '0'};
    width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
    min-height: ${(props) => props.$minHeight || 'unset'};
    height: ${(props) => (props.$fullHeight ? '100%' : 'auto')};
    flex-grow: ${(props) => (props.$grow ? 1 : 0)};
`;
