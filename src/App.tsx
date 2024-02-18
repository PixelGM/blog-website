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
import Wallpaper169 from './assets/wallpaper169.jpg';
import Wallpaper11 from './assets/wallpaper11.jpg';

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
                <div className={styles.Content}>
                    <div className={styles.rectangle} />
                    <ul className={styles.images}>
                        <li>
                            <div className={styles.ImagesContent}>
                                <img
                                    src={Wallpaper169}
                                    alt="text"
                                    draggable="false"
                                />
                                <div className={styles.RectangleImages} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.ImagesContent}>
                                <img
                                    src={Wallpaper11}
                                    alt="text"
                                    draggable="false"
                                />
                                <div className={styles.RectangleImages} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.ImagesContent}>
                                <img
                                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                    alt="text"
                                    draggable="false"
                                />
                                <div className={styles.RectangleImages} />
                            </div>
                        </li>
                        <li>
                            <div className={styles.ImagesContent}>
                                <img
                                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                                    alt="text"
                                    draggable="false"
                                />
                                <div className={styles.RectangleImages} />
                            </div>
                        </li>
                    </ul>
                    <div className={styles.LatestArticlesPics}></div>
                    <div className={classNames(styles.rectangle, styles.middle)} />
                </div>
                <div className={styles.Content}>
                    <h1>FEATURED ARTICLES</h1>
                </div>
                <h1></h1>
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
            <h1></h1>
        </>
    );
}

export default App;
