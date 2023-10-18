
import React from "react";
import { useSelector } from "react-redux";

const downloadJSON = (data) => {
    const json = JSON.stringify(data);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'cart.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

const DownloadButton = () => {
    const carts = useSelector((state) => state.carts);

    const handleDownload = () => {
        downloadJSON(carts);
    };

    return (
        <button onClick={handleDownload}>
            Download Cart as JSON
        </button>
    );
};

export default DownloadButton;