import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasWidth: 2090,
        canvasHeight: 1175,
        windowWidth: 996,
        windowHeight: 1080,
    },
    isSnippet: false,
});
