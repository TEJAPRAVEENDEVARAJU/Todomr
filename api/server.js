const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://Todo_list:HG2rLju41c9C8hzd@cluster0.m8rrow5.mongodb.net?retryWrites=true&w=majority/Devtown",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch(console.error);
  const Todo = require('./model/Todo');
  app.get('/todos', async(req, res) => {
    const todo = await Todo.find();
    res.json(todo);
  })

  app.post('/todo/new', (req, res)=>{
    const todo = new Todo({
      text:req.body.text

    });
    todo.save();

    res.json(todo);
  });

  app.delete('/todos/delete/:id', async(req,res)=> {
    const result= await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
  })

  app.put('/todos/complete/:id', async(req, res)=>{
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;

    todo.save();
    res.json(todo);

  })

app.listen(3004, () => console.log("Server started on port 3004"));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// mongoose
//   .connect(
//     "mongodb+srv://todo-list:@cluster0.jrgea7e.mongodb.net/?retryWrites=true&w=majority/devtown",
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     }
//   )
//   .then(() => console.log("Connected to MongoDB"))
//   .catch(console.error);
//   const Todo = require('./models/Todo');
//   app.get('/todos', async(req, res) => {
//     const todo = await Todo.find();
//     res.json(todo);
//   })

//   app.post('/todo/new', (req, res)=>{
//     const todo = new Todo({
//       text:req.body.text

//     });
//     todo.save();

//     res.json(todo);
//   });

//   app.delete('/todos/delete/:id', async(req,res)=> {
//     const result= await Todo.findByIdAndDelete(req.params.id);
//     res.json(result);
//   })

//   app.put('/todos/complete/:id', async(req, res)=>{
//     const todo = await Todo.findById(req.params.id);
//     todo.complete = !todo.complete;

//     todo.save();
//     res.json(todo);

//   })

// app.listen(3004, () => console.log("Server started on port 3004"));