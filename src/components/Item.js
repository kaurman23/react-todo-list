import React from 'react'

export const Item = () => {
    return (
        <div className="item-list ">
            <div className="alert alert-secondary">
                This is a To Do Item
                <button type="button" className="close" data-dismiss="alert">
                    &times;
                </button>
            </div>
        </div>
    )
}
