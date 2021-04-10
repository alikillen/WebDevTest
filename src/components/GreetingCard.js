import React from "react";

// import TextGenerator from "../components/TextGenerator";

export default function GreetingCard({ data, text }) {

// class GreetingCard extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(e) {
  //   // Before: this.setState({temperature: e.target.value});
  //   this.props.onInputChange(e.target.value);
  // }

  // render() {
    
    const fname = data.name;
    const hobby = data.hobby;
    const greeting = data.greeting;
 
    const checked = data.checked;

    // console.log(checked)
    // console.log(checked.value)
    // console.log(checked.name)
    // console.log(checked.text)
    // console.log(text)
    return (
      <>
        <h1>Greeting Card</h1>
        <div className='greeting-card'>
          <p>{greeting}</p>
          <h2>Hismile</h2>

          <br></br>
          <p>{fname}</p>
          <br></br>
          <p>{hobby && "Hobby: " + hobby}</p>
          <br></br>
          {/* <h2>{checked + "Checked: " + text}</h2> */}
          <p>{checked === true ? "Checked?: " + text : ""}</p>
          {/* dont need text variable if doing it this way */}
          <small>
            a: 225-229 Burleigh Connection Road Burleigh Waters QLD 4220{" "}
          </small>
        </div>
      </>
    );
  // }
}