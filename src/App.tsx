import './index.css';
import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import Logo from './assets/logo.png';
import Search from './assets/search.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <div className={styles.App}>
                <div className={styles.headerbar}>
                    <div className={styles.headerbar} />
                    <img src={Logo} alt="" className={styles.headerbar} />
                    <img src={Search} alt="" className={styles.headerbar} width="25" />
                </div>
                <div className={styles.LatestArticlesBar}>
                    <div className={styles.rectangle} />
                    <div className={styles.LatestArticlesPics}>
                            <ul style={{ display: 'flex', overflowX: 'auto', listStyle: 'none' }}>
                                <li className={styles.Draggable}>
                                    <img
                                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                        alt="text"
                                        draggable="false"
                                    />
                                </li>
                                <li className={styles.Draggable}>
                                    <img
                                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                        alt="text"
                                        draggable="false"
                                    />
                                </li>
                                <li className={styles.Draggable}>
                                    <img
                                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                        alt="text"
                                        draggable="false"
                                    />
                                </li>
                                <li className={styles.Draggable}>
                                    <img
                                        src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                        alt="text"
                                        draggable="false"
                                    />
                                </li>
                            </ul>
                    </div>
                </div>
                <div>
                    <a href="https://vitejs.dev" target="_blank">
                        <ViteLogo
                            height="6em"
                            width="6em"
                            className={classNames(styles.logo)}
                            title="Vite logo"
                        />
                    </a>
                    <a href="https://reactjs.org" target="_blank">
                        <ReactLogo
                            height="6em"
                            width="6em"
                            className={classNames(styles.logo, styles.react)}
                            title="React logo"
                        />
                    </a>
                    <a href="https://www.typescriptlang.org/" target="_blank">
                        <TypescriptLogo
                            height="6em"
                            width="6em"
                            className={classNames(styles.logo, styles.ts)}
                            title="Typescript logo"
                        />
                    </a>
                    <a href="https://sass-lang.com/" target="_blank">
                        <ScssLogo
                            height="6em"
                            width="6em"
                            className={classNames(styles.logo, styles.scss)}
                            title="SCSS logo"
                        />
                    </a>
                </div>
                <div className={styles.card}>
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
                <p className={styles['read-the-docs']}>
                    Click on the Vite and React logos to learn more
                </p>
            </div>
        </>
    );
}

export default App;
