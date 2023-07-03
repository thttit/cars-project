import React from "react";
import ChildDemo from "./ChildDemo";
import AddComponent from "./AddComponent";

class Demo extends React.Component {
  // key:value
  state = {
    arrayjobs: [
      { id: 'abc', title: 'developer', salary: '500 '},
      { id: 'abc1', title: 'tester', salary: '400 '},
      { id: 'abc2', title: 'project managers', salary: '1000 '}
    ]
  };

  handleonChangeName = (event) => {
    //merge
    this.setState({
      name: event.target.value,
    });
  };
  handleClickButton = () => {
    alert("Click me");
  };

  addNewJob = (job)=> {
    console.log('check job from parent: ', job)
    this.setState({
      arrayjobs: [...this.state.arrayjobs, job]
    })
  }

  deleteJob = (job) => {
    let currentJobs = this.state.arrayjobs;
    currentJobs = currentJobs.filter(item => item.id !== job.id);
    this.setState({
      arrayjobs: currentJobs
    })
  }
  render() {
    return (
      <>
        <AddComponent
        addNewJob={this.addNewJob}
        />
        
        <ChildDemo 
          arrayjobs={this.state.arrayjobs}
          deleteJob={this.deleteJob}
        />
      </>
    );
  }
}

export default Demo;
