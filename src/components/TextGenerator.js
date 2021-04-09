import React from "react";
import GreetingCard from "./GreetingCard";

// Greeting Card Text Generator:
// Create a greeting card text generator where the user fills in a form and it renders the html.
// Form inputs not filled will not appear. Use modern html and no inline styling for rendered greeting card.
// Mobile first but not as necessary as the first example.
// Optional Challenge: render raw html of the rendered signature.

class TextGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", hobby: "", greeting: "", checked: "false" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // this.setState({ value: event.target.value });
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    // console.log(this.state.checked.name)
    // console.log(this.state.checked.value)
    // console.log(this.state.checked.text)
    // console.log(value)
  }

  // handleSubmit(event) {
  //   alert(
  //     "info submitted: " +
  //       this.state.name +
  //       this.state.hobby +
  //       this.state.greeting +
  //       this.state.checked
  //   );
  //   event.preventDefault();
  // }

  render() {
    return (
      <>
      <h1>Text Generator</h1>
        <form onSubmit={this.handleSubmit}>
          <label for='name'>
            Name:
            <input
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <br></br>

          <label for='hobby'>
            Hobby:
            <input
              type='text'
              name='hobby'
              value={this.state.hobby}
              onChange={this.handleChange}
            />
          </label>
          <br></br>

          <label for='greeting'>
            Greeting:
            <input
              type='text'
              name='greeting'
              value={this.state.greeting}
              onChange={this.handleChange}
            />
          </label>
          <br></br>

          <label for='checked'>
            Checked?
            <input
              type='checkbox'
              name='checked'
              value={this.state.checked}
              // text={this.state.checked === true ? "checked" : "unchecked"}
              onChange={this.handleChange}
            />
          </label>
          <br></br>
          {/* <input type='submit' value='Submit' /> */}
        </form>

        <GreetingCard
          data={this.state}
          text={this.state.checked === true ? "checked" : "unchecked"}
        />
      </>
    );
  }
}

export default TextGenerator;

