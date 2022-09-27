import React from "react";
import classNames from 'classnames';

export function Button({outline}) {
    return (
    <button className={ classNames('button', {
        'button-outline': outline,
    })
    }/>
    )
}
