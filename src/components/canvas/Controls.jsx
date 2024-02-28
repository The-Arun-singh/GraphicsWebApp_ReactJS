import React, { useState } from 'react';

function Controls({ onAddText, onUndo, onRedo, onDownload }) {
    const [text, setText] = useState('');
    const [font, setFont] = useState('Arial');
    const [color, setColor] = useState('#000');
    const [size, setSize] = useState(12);
    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    const handleAddText = () => {
        onAddText(text, font, color, size, x, y);
        setText('');
    };

    return (
        <div>
            <input className='form-control mx-2 my-1' type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <select value={font} onChange={(e) => setFont(e.target.value)}>
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                {/* Add more fonts as needed */}
            </select>
            <input className='form-control mx-2 my-1' type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <input className='form-control mx-2 my-1' type="number" value={size} onChange={(e) => setSize(e.target.value)} />
            <div className='d-flex'>
                <input className='form-control mx-2 my-1 w-50' type="number" value={x} onChange={(e) => setX(e.target.value)} />
                <input className='form-control mx-2 my-1 w-50' type="number" value={y} onChange={(e) => setY(e.target.value)} />
            </div>
            <button className='btn btn-light mx-2 my-1' onClick={handleAddText}>Add Text</button>
            <button className='btn btn-light mx-2 my-1' onClick={onUndo}>Undo</button>
            <button className='btn btn-light mx-2 my-1' onClick={onRedo}>Redo</button>
            <button className='btn btn-light mx-2 my-1' onClick={onDownload}>Download</button>
        </div>
    );
}

export default Controls;
