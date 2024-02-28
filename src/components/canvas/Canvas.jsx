import React, { useEffect, useRef } from 'react';

function Canvas({ state }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        state.forEach(({ text, font, color, size, x, y }) => {
            ctx.font = `${size}px ${font}`;
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        });
    }, [state]);

    return <canvas className='bg-light rounded m-5' ref={canvasRef} width={500} height={600} />;
}

export default Canvas;
