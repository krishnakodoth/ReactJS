import React from "react";
export const ActionButton = React.memo(({disabled,className,onClick,buttonText}) => {
    return (
        <button
            disabled={disabled}
            className={className}
            onClick={onClick}>
            {buttonText}
        </button>
    )
});
