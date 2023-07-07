import React from "react";
import logo from '../../assets/images/IMG-7107.jpg'

class Home extends React.Component{

    render(){
        return(
            <>
                <div>Hello world from Homepage</div>
                <div><img src={logo} style={{width:'200px', height: '200px', marginTop:'20px'}}/></div>
            </>
        );
    }
}

export default Home;