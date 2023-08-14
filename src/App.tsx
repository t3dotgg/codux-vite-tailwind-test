import { useState } from 'react';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-800 p-8">
            <div className="flex">
                <a href="https://vitejs.dev" target="_blank">
                    <ViteLogo className={'p-6 h-36 w-36'} title="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank" download={undefined}>
                    <ReactLogo className={'p-6 h-36 w-36'} title="React logo" />
                </a>
                <a href="https://www.typescriptlang.org/" target="_blank">
                    <TypescriptLogo
                        className={'p-6 h-36 w-36'}
                        title="Typescript logo"
                    />
                </a>
            </div>
            <div className={'p-8'}>
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className={'text-gray-200'}>Click on the Vite and React logos to learn more</p>
        </div>
    );
}

export default App;
