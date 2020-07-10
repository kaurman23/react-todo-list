import React from 'react'

export const Item = ({job}) => {
    return (
        <div className="item-list ">
            <div className="alert alert-secondary">
                {job}
                <button type="button" className="close" data-dismiss="alert">
                    &times;
                </button>
            </div>
        </div>
    )
}
