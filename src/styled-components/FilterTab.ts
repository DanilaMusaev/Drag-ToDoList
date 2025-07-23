import styled from 'styled-components';

export const FilterTab = styled.div`
    padding: 6px 16px;

    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.bgColorDarken};

    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.primaryTextColor};

    cursor: pointer;
    transition: 0.15s ease-out;

    &:hover {
        filter: contrast(0.9);
    }
`;
