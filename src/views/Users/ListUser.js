import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

class ListUser extends React.Component {
  state = {
    listUsers: []
  };
  async componentDidMount() {
    //Cách promist:
    // axios.get('https://reqres.in/api/users?page=2')
    // .then(res => {
    //     console.log('>>> check res: ', res.data.data);
    // })

    //Cách await
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleDetailUser =(user) => {
    console.log(">>>check user. ", this.props)
    this.props.history.push(`/user/${user.id}`)
  }
  render() {
    let {listUsers} = this.state;
    return (
      <div className="list-user-container">
        <div className="title">All list users</div>
        <hr />
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div className="child" key={item.id}
                onClick={()=> this.handleDetailUser(item)}>
                    {index + 1} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
