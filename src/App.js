import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      items: [],
    };
  }

  // toggle = () => {
  //   this.setState({ isOn: !this.state.isOn });
  // };

  inputUpdate = (event) => {
    this.setState({ input: event.target.value });
  };

  formSubmit = (event) => {
    event.preventDefault();
    console.log("This is state", this.state.items);
    this.setState({
      items: [...this.state.items, this.state.input],
      input: "",
    });
  };

  deleteItem = (index) => {
    let newList = [...this.state.items];
    newList.splice(index, 1);
    this.setState({
      items: [...newList],
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>To-do App</h1>

          <form onSubmit={this.formSubmit}>
            <input
              type="text"
              placeholder="Tasks"
              value={this.state.input}
              onChange={this.inputUpdate}
            />
            <button>Submit</button>
          </form>
          <ul>
            {this.state.items.map((item, index) => {
              return (
                <li key={item}>
                  <span>{this.state.items[index]}</span>

                  <button onClick={() => this.deleteItem(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
