import React from "react";

class ChildDemo extends React.Component {
  // key:value
  state = {
    showJobs: false,
  };

  handleShowHide = () =>{
    this.setState({
        showJobs: !this.state.showJobs
    })
  }
  handleOnClickDelete =(job) => {
    console.log('>>> handleOnclick', job);
    this.props.deleteJob(job)
    
  };
  render() {
    let { arrayjobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? 'showJobs = true' : 'showJobs = false'; //kiến thức đi làm 
    console.log('>>>check conditional: ', check)
    return (
      <>
        {showJobs === false ? 
          <div><button onClick={()=> {this.handleShowHide()}}>Show</button></div>
          : 
            <>
              <div className="job-lists">
                {
                  arrayjobs.map((item, index) => {
                    return (
                      <div key={item.id}>
                        {item.title} - {item.salary} 
                        <></> <span onClick={()=> {this.handleOnClickDelete(item)}}>x</span>
                      </div>
                    );
                  })
                }
              </div>
              <div>
                <button onClick={()=> {this.handleShowHide()}}>Hide</button>
              </div>
            </>
          }
      </>
    );
  }
}  

// const ChildDemo = (props) => {
//   let { arrayjobs } = props;
//   return (
//     <>
//       <div className="job-lists">
//         {arrayjobs.map((item, index) => {
//           return (
//             <div key={item.id}>
//               {item.title} - {item.salary}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };
export default ChildDemo;
