import React from "react";
import UserClass from "./UserClass";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("This is (Parent) About Constructor");
  }
  async componentDidMount() {
    console.log("Parent componentDidMount");
    this.timer = setInterval(() => {
      console.log("set Interval inside componentDidMount");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        {console.log("This is (Parent) About Render")}
        About
        {/* <UserClass
          name={"Sivva Alekhya"}
          location={"Virginia"}
          address={"alekhya1@gmail.com"}
        />
        <UserClass
          name={"Sivva Samrudh"}
          location={"California"}
          address={"samrudh5000@gmail.com"}
        /> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
