import React, {useContext} from 'react';
import {GlobalContext} from '../contexts/GlobalState';

export const Item = ({job}) => {

    const {deleteItem} = useContext(GlobalContext);

    return (
        <div className="item-list ">
            <div className="alert alert-secondary">
                {job.todo}
                <button type="button" className="close" data-dismiss="alert" onClick={()=> deleteItem(job.id)}>
                    &times;
                </button>
            </div>
        </div>
    )
}
