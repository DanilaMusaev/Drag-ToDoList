import styled from 'styled-components';
import { Flex } from './styled-components/Flex';
import MainBlock from './components/MainBlock/MainBlock';

const AppWrapper = styled(Flex)`
    width: 100vw;
    height: 100vh;
`;

function App() {
    return (
        <AppWrapper
            $direction="column"
            $align="center"
            $justify="center"
        >
            <MainBlock />
        </AppWrapper>
    );
}

export default App;
