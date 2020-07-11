import React from 'react'

export const Button = (props) => {

    const buttonTypes = {
        All: "btn btn-info",
        Done: "btn btn-warning",
        Pending: "btn btn-pending"
    }

    return (
        <>
            <button className={` ${buttonTypes[props.type] } btn-lg `} >{props.type} </button>
        </>
    )
}
