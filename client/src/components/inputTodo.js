import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [desc, setDesc] = useState("Hello");

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5">
                <input type="text" className="form-control" value={desc} onChange={e => setDesc(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
}
 

    export default InputTodo;