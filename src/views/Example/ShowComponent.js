import React from "react";
import { toast } from "react-toastify";

class ShowComponent extends React.Component{

    state={
        editTodo: {}
    }
    // handleShowHideJob() {
    //     this.setState({
    //         listTodo: !this.state.listTodo
    //     })
    // }
    handleChangeEditTodo=(event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        });
    };
    handleDeleteTodo=(event) =>{
        this.props.deleteTodos(event);
    };
    handleEditTodo=(event) => {
        let {listTodo} = this.props;
        let {editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if(isEmptyObj === false && editTodo.id === event.id){
            let listTodoCopy = [...listTodo];

            let objIndex = listTodoCopy.findIndex((item => item.id === event.id));
            //Log object to Console.
            console.log("Before update: ", listTodoCopy[objIndex])

            //Update object's name property.
            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodo: listTodoCopy,
                editTodo: {}
            })
            toast.success('Update succeed');
            return;
        }
        //edit
        this.setState({
            editTodo: event
        })
    };
    render(){
        let {listTodo} = this.props;
        let {editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        // let check = listTodo === true ? 'showJob=true' : 'showJob=false';
        console.log('>>> check empty, ', isEmptyObj);
        return(
            <>
                <div className="list-todo-content">
                        {listTodo && listTodo.length > 0 &&
                            listTodo.map((item, index) => {
                                return(
                                    <div className="todo-child" key={item.id}> 
                                    
                                        {isEmptyObj === true ? 
                                            <span>{index + 1} - {item.title}</span>
                                            :
                                            <>
                                            {editTodo.id === item.id ? 
                                                <span>
                                                    {index + 1} - 
                                                    <input value={editTodo.title}
                                                    onChange={(event)=> this.handleChangeEditTodo(event)}/>
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                            }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={()=> {this.handleEditTodo(item)}}>
                                            {isEmptyObj === false && editTodo.id === item.id ?
                                                'Save': 'Edit'
                                            }
                                        </button>
                                        <button 
                                        className="delete"
                                        onClick={()=> {this.handleDeleteTodo(item)}}>Delete</button>
                                    </div>
                                )
                            })
                        }
                </div>
                {/* {showJob === false ?
                    <div> <button onClick={()=> {this.handleShowHideJob()}}>Show Job</button></div>
                :
                    <>
                        <div className="list-jobs">
                            {
                                arrJob.map((item,index)=>{
                                    return (
                                        <div key={item.id}>
                                          {item.title} - {item.salary} 
                                        </div>
                                      );
                                })
                            }
                        </div>

                        <div>
                            <button onClick={()=> {this.handleShowHideJob()}}>Hide Job</button>
                        </div>
                    </>
                } */}
            </>
        );
    }
}

export default ShowComponent;