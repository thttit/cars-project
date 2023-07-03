import React from "react";
import { toast } from "react-toastify";

class AddComponent2 extends React.Component{
    state ={
        title: ''
    }

    handleChangeTitle=(event) => {
        this.setState({
            title: event.target.value
        });
    };
    handleSubmit=(event) => {
        event.preventDefault();
        if(!this.state.title){
            toast.error('Missing title');
            return;
        }
        console.log('>>check input, ', this.state);
        
        this.props.addTodos({
            id: Math.floor(Math.random()*100),
            title: this.state.title
        })
 
        this.setState({
            title: ''
        })
    };
    
    render() {
        return(
            <>
                <div className="add-todo">
                        <form>
                        <label htmlFor="fname">Title Job:</label> <br />
                        <input 
                        type="text" 
                        value= {this.state.title}
                        onChange={(event)=> this.handleChangeTitle(event)}
                        />
                        <input className="btn-add"
                        type="submit" value='Add'
                        onClick={(event)=> {this.handleSubmit(event)}}/>
                        <br />
                        {/* <label htmlFor="lname">Salary:</label><br />
                        <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(event)=> this.handleChangeSalary(event)}
                        /><br /><br /> */}
                        </form>
                </div>               
            </>
        )
    }

}
export default AddComponent2;