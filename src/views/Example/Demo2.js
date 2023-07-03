import React from "react";
import AddComponent2 from './AddComponent2';
import ShowComponent from "./ShowComponent";
import { toast } from "react-toastify";

class Demo2 extends React.Component{

    state ={
        listTodo: [
            {id: '1', title:'Homework'},
            {id: '2', title:'Nextflix and Chill'},
            {id: '3', title:'Fixing bug'}
        ]
    }

    addTodos=(job) =>{
        console.log('check job from parent: ', job)
        this.setState({
            listTodo: [ ...this.state.listTodo, job]
        })

        toast.success('Success');
        
    };
    deleteTodos=(job) => {
        let current = this.state.listTodo;
        current = current.filter(item=> item.id !== job.id)
        this.setState({
            listTodo: current
        })
        toast.success('Delete success');
    };
    // editTodos=(job) => {
    //     console.log('check job from parent: ', job)
        
    // };
    render() {
        // let {listTodo} = this.state;
        return(
            <>
                <div className="list-todo-container">
                    <AddComponent2
                        addTodos = {this.addTodos}
                    />
                    
                    <ShowComponent
                    listTodo={this.state.listTodo}
                    deleteTodos={this.deleteTodos}
                    // editTodos={this.editTodos}
                    />
                </div>
            </>

        )
    }
}

export default Demo2;