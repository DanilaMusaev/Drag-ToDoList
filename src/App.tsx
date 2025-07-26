import styled from 'styled-components';
import { Flex } from './styled-components/Flex';
import MainBlock from './components/MainBlock/MainBlock';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const AppWrapper = styled(Flex)`
    width: 100vw;
    height: 100vh;
`;

function App() {
    return (
        <AppWrapper $direction="column" $align="center" $justify="center">
            <DndProvider backend={HTML5Backend}>
                <MainBlock />
            </DndProvider>
        </AppWrapper>
    );
}

export default App;
