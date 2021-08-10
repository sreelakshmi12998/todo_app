import React, { Component } from 'react'
import "./TodoApp.css";

export class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input : "",
             items : []
        }
    }
    
    handleChange =(event)=>{
this.setState({
    input : event.target.value
})

    };
    storeItems=(event)=>{
        event.preventDefault();
      const{input}= this.state;
         this.setState({
             items : [...this.state.items, input]
         });
    }
    deleteItems = (key)=>{
        this.setState({
            items : this.state.items.filter((data,index)=>index !==key)
        });
    }
    render() {
        const {input,items}= this.state;
        console.log(items)
        return (
            <div className="container">
            
            <form className="input-section" onSubmit={this.storeItems}>
            <h1> Todolist Application</h1>
                <input type ="text" value={input} onChange={this.handleChange} placeholder="Enter item" />
              
               
            </form>
            <ul>
              {items.map((data,index)=>(
               <li  key={index}> <input type = "checkbox" /> {data} <i className="fas fa-trash-alt" onClick={()=>this.deleteItems(index)}></i></li>
              ))}
            </ul>
        
            </div>
        )
    }
}

export default TodoApp
