import React, { Fragment } from 'react';

const EditTodo = ({ todo }) => {
    console.log(todo)

    return(
    <Fragment >

        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
        </button>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <input type="text" className="form-control" />
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Edit</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div> 

        </Fragment>
    )
}

export default EditTodo;