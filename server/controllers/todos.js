// Controllers
const Todos = require('./../models/todos');

exports.todos = (req, res) => {
  // console.log("body ", req.body);
  Todos.find({}, function (error, todos) {
    if (error || !todos) {
      return res.status(400).json({
        error: "Todos not found"
      })
    }
    res.send(todos);
  });
  
}

exports.todoupdate = (req, res) => {
  // const { title, description, email} = req.body;
  
}

exports.addtodo = (req, res) => {
  const {title, description, status, email} = req.body;
  const todo = new Todos({title, description, status, email})
  todo.save((error, todo) => {
    if (error) {
      return res.status(401).json({
        error: 'Error saving todo in database. Try again.'
      });
    }
    return res.json({
      message: 'todo added'
    })
  })
}