import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 2090,
        canvasHeight: 1175,
        windowWidth: 1366,
        windowHeight: 768,
    },
    isSnippet: false,
});
