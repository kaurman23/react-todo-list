import React from 'react'
import {Button} from './Button';

export const Summary = () => {
    return (
        <div className="summary-btn" >
            <Button type="All"  />
            <Button type="Done"  />
            <Button type="Pending"  />
        </div>
    )
}
