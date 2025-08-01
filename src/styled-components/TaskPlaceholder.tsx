import styled, { keyframes } from "styled-components";
import GrabbleZone from "../components/GrabableZone/GrabbleZone";
import { AbsIcon } from "./AbsIcon";
import { TrashIcon } from "../icons/TrashIcon";

const fadeInAnim = keyframes`
    0% {
        opacity: 0;
        transform: scaleY(0);
    } 
    100% {
        opacity: 0.7;
        transform: scaleY(1);
    }
`

const loadingGrad = keyframes`
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

const TaskPlaceholderStyled = styled.div`
    position: relative;
    margin: 10px 0px;
    padding: 8px 23px 22px 30px;
    width: 100%;
    height: 48px;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.pureWhiteColor};
    opacity: 0;

    animation: ${fadeInAnim} 0.3s ease forwards;
`; 

const TextPlaceholder = styled.div`
    height: 18px;
    width: 100%;
    background-color: ${({theme}) => theme.colors.mainBgColor};
    background: linear-gradient(
        90deg,
        ${({theme}) => theme.colors.mainBgColor} 25%,
        ${({theme}) => theme.colors.mainBgColor}70 37%,
        ${({theme}) => theme.colors.mainBgColor} 63%
    );
    background-size: 400% 100%;
    animation: ${loadingGrad} 1.2s ease infinite;
    border-radius: 4px;
`

export const TaskPlaceholder = () => {
    return ( <TaskPlaceholderStyled>
        <GrabbleZone $taskStatus="todo"/>
        <TextPlaceholder />
        <AbsIcon $bottom="0px" $right="5px">
            <TrashIcon />
        </AbsIcon>
    </TaskPlaceholderStyled> );
}
