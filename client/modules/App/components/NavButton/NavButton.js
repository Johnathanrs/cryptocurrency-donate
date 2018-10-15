import React from 'react';

export default function NavButton(props) {
    const { label, onClick } = props;
    return (
        <button onClick={onClick} className="btn btn-lg btn-link" type="button">{label}</button>
    );
}
