import React, {useContext, useRef} from 'react';
import {GlobalContext} from '../contexts/GlobalState';

export const Item = ({job}) => {

    const { deleteItem,makeDone } = useContext(GlobalContext);
    const itemRef = useRef(null);
    const jobId = job.id;

    const doneJob = () => {
        itemRef.current.classList.remove('alert-secondary');
        itemRef.current.classList.add('alert-success');
        itemRef.current.classList.add('strike')
        makeDone(jobId)
    }

    

    return (
        <div className="item-list ">
            <div className="alert alert-secondary" onClick={ (jobId) => doneJob(jobId)} ref={itemRef}>
                {job.todo}
                <button type="button" className="close" data-dismiss="alert" onClick={()=> deleteItem(job.id)}>
                    &times;
                </button>
            </div>
        </div>
    )
}
