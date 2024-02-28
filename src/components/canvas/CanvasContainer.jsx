import React, { useRef, useState } from 'react';
import Canvas from './Canvas';
import Controls from './Controls';
import { handleDownload } from '../../Utils/Handlers';

function CanvasContainer() {
    const canvasRef = useRef(null);
    const [canvasState, setCanvasState] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(0);
    const history = useRef([]);

    const undo = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setCanvasState(history.current[historyIndex - 1]);
        }
    };

    const redo = () => {
        if (historyIndex < history.current.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setCanvasState(history.current[historyIndex + 1]);
        }
    };

    const addText = (text, font, color, size, x, y) => {
        const newState = [...canvasState, { text, font, color, size, x, y }];
        history.current = [...history.current.slice(0, historyIndex + 1), newState];
        setHistoryIndex(history.current.length - 1);
        setCanvasState(newState);
    };


    return (
        <div className="App bg-dark p-3">
            <Canvas ref={canvasRef} state={canvasState} />
            <Controls onAddText={addText} onUndo={undo} onRedo={redo} onDownload={handleDownload} />
        </div>
    );
}

export default CanvasContainer;
