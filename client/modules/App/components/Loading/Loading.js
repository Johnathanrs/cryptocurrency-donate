import React from 'react';

import LOADDING from '../../../../assets/img/loadin_gray.gif';

const Loading = ({ loading, width, height }) => {
    return (
        <div>
            {loading && <img alt="loading" src={LOADDING} width={width} height={height} />}
        </div>
    );
};

Loading.defaultProps = {
    loading: true,
    width: 30,
    height: 30,
};

export default Loading;
