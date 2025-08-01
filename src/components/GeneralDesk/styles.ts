import styled from "styled-components";

export const StyledGeneralDesk = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-grow: 1;

    min-height: 350px;
    overflow: hidden;

    border-radius: 25px;
    background: ${({ theme }) => theme.colors.mainBgColor};
`;
