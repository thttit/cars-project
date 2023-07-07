import React from "react";
import logo from '../../assets/images/IMG-7107.jpg'
import { connect } from "react-redux";

class Home extends React.Component{

    handleDeleteUserRedux=(user) => {
        console.log('>>chech user, ', user);
        this.props.deleteUserRedux(user);
    };

    handleCreateUserRedux=() => {
        this.props.addUserRedux();
    };

    render(){
        console.log('>>>chech props', this.props);
        let listUsers = this.props.dataRedux;

        return(
            <>
                <div>Hello world from Homepage</div>
                <div><img src={logo} style={{width:'380px', height: '300px', marginTop:'20px'}}/></div>
                <br />
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return(
                                <div key={item.id}>
                                    {index + 1} - {item.name} 
                                    &nbsp; <span onClick={()=> {this.handleDeleteUserRedux(item)}}>X</span>
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={()=> {this.handleCreateUserRedux()}}>Add New</button>
            </>
        );
    }
}

//Redux
const mapStateToProps = (state)=> {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteUserRedux: (userDelete)=> dispatch({ type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: ()=> dispatch({type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);