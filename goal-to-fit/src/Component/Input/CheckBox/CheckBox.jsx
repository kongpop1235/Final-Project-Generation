import React from 'react';

// * css
import './CheckBox.css';

const CheckBox = ({ dataTg, id, className }) => {
    return (
        <li id="li-check" className="tg-list-item">
            <input className="tgl tgl-flip" id={id} type="checkbox" />
            <label className="tgl-btn" data-tg-off={dataTg} data-tg-on={dataTg} htmlFor={id}>
                <p>M</p>
            </label>
        </li>
    )
}

export default CheckBox;