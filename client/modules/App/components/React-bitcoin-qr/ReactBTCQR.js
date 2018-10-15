import React from 'react';
import * as qrImage from 'qr-image';

const ReactBTCQR = (props) => {
    const pngBuffer = qrImage.imageSync(props.text, { type: 'png', margin: 1 });
    const dataURI = 'data:image/png;base64,' + pngBuffer.toString('base64');
    return (
        <img className="react-qr" src={dataURI} alt="react qr" />
    );
}

export default ReactBTCQR;
