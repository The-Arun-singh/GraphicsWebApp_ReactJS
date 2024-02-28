export const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'canvas-image.png';
    link.click();
};
