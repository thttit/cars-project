import React from "react";

class Demo extends React.Component{

    // key:value
    state = {
        name: 'Thy IT',
        channel: 'ThyGao'
    }

    render() {
        return(
            <>
                <div>
                    Youtube channel : {this.state.channel}
                </div>
                <div> 
                    hello demo, ngiu tui là {this.state['name']}
                </div>
            </>
        )
    }
}

export default Demo;