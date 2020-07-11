import React, {useContext} from 'react'
import {Button} from './Button';
import {GlobalContext} from "../contexts/GlobalState";

export const Summary = () => {

    const {items} = useContext(GlobalContext);
    console.log(items)

    const allCount = items.length;
    const pendingCount = (items.filter(item=> item.done===false )).length;
    const doneCount = (items.filter(item=> item.done===true )).length;

    console.log(pendingCount)

    return (
        <div className="summary-btn" >
            <Button type="All" count={allCount}  />
            <Button type="Done" count={doneCount} />
            <Button type="Pending" count={pendingCount} />
        </div>
    )
}
