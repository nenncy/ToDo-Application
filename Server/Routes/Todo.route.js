const express =require('express');
const mongoose=require('mongoose');
const todoRoutes=express.Router();
const Todo=require('../Model/todo.model')

//create to do

todoRoutes.post('/create-todo' , async(req,res)=> {
   
  try{
    console.log(JSON.stringify(req.body));
    const todo_name=req.body.todo_name;
    const date=req.body.date;

    const newTask=await Todo.create({
      todo_name,
      date
    })
    console.log("added!");


  }catch(error){
    console.log(error)
  }
  });

// read data

todoRoutes.route('/get').get((req,res,next)=>{
    Todo.find((error,data)=>{
        if(error){
            return next(error)
        }
        else{
         //console.log(data);
         res.status(200).send({data:data})
        }

    })
    
})

//UPDATE data

todoRoutes.route('/edit/:id').post((req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      todo.todo_name= req.body.todo_name
      todo.date = req.body.date;
    
      todo.save()
        .then(() => res.json('updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


todoRoutes.delete('/delete/:id', async (req, res) => {
  try {
    console.log(req.params.id);
    const todo= await Todo.findByIdAndDelete(req.params.id);
    res.json('data deleted.');
  } catch (err) {
    console.log(err);
    res.status(400).json('Error: ' + err);
  }
});

  module.exports=todoRoutes;