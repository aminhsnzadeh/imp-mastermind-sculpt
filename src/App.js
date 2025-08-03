import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import MainScene from "./scenes/main";
function App() {
    const [count, setCount] = useState(0);
    return (_jsx("div", { style: { width: '100vw', height: '100vh' }, children: _jsx(MainScene, {}) }));
}
export default App;
