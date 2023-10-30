import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 26,
      YOP: 2017,
    };
    console.log("This is (child) User Class constructor of ", props.name);
  }
  componentDidMount() {
    console.log("child componentDidMount", this.props.name);
  }
  render() {
    const { name, address, location } = this.props;
    const { age, YOP } = this.state;
    return (
      <div className="user-class-component">
        {console.log("This is (Child) UserClass Render", this.props.name)}
        <b>Through Class Component</b>
        <h2>{name}</h2>
        <h3>
          Age :{age} YOP : {YOP}
        </h3>
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          age++
        </button>
        <h4>{address}</h4>
        <h4>{location}</h4>
      </div>
    );
  }
}

/*
- Parent Constructor
- Parent render

    - First Component Constructor    // Render Phase
    - First Component Render
    
    - Second Component constructor
    - Second Component render

 <DOM UPDATED - IN SINGLE BATCH>   
 
  - First componentDidMount
  - Second componentDidMount         // Commit Phase

- Parent componentDidMount

*/

export default UserClass;
