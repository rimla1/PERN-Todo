import React, { Fragment } from 'react';

const EditTodo = () => {
    return(
    <Fragment >

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Edit
        </button>


        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <input type="text" className="form-control" />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Edit</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div> 

        </Fragment>
    )
}

export default EditTodo;