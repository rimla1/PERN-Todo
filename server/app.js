const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();



//middleware
app.use(cors())
app.use(express.json())

//ROUTES//

//create a todo

app.post('/todos', async (req, res, next) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
            );
        
            res.json(newTodo.rows[0])
    } catch (err) {
        console.error(err.message)
    }
})

//get all todos

app.get('/todos', async (req, res, next) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log('Server has started on port 5000')
})