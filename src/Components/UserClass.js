import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "XXXX",
        location: "xxxx",
      },
    };
  }
  async componentDidMount() {
    const response = await fetch("https://api.github.com/users/samrudhsivva");
    const json = await response.json();
    this.setState({ userInfo: json });
  }
  componentDidUpdate() {
    console.log("component updated!!!");
  }

  componentWillUnmount() {
    console.log("component will unmount!!!");
  }
  render() {
    console.log("userinfo is", this.state.userInfo);
    const { name, location, avatar_url, company } = this.state.userInfo;
    return (
      <div className="user-class-component">
        <img style={{height:"50px", width:"50px"}} src={avatar_url}></img>

        <h2>{name}</h2>
        <h2>{location}</h2>
        <h2>{company}</h2>
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
