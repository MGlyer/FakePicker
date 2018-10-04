import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  state = {
    randItems: ['first', 'cat', 'woof'],
    showFakeBox: false,
    showThrillResult: false,
    itemToShow: '',
    itemToAdd: ''
  };
  handleFakeBoxChange = this.handleFakeBoxChange.bind(this)
  showThrill = this.showThrill.bind(this)
  handleAddBoxChange = this. handleAddBoxChange.bind(this)

  handleFakeBoxChange(e) {
    this.setState({itemToShow: e.target.value})
  }

  handleAddBoxChange(e) {
    this.setState({itemToAdd: e.target.value})
  }
  
  showThrill() {
    this.setState({showThrillResult: true})
  }



  render() {
    return (
      <div>
        <h1>Random Picker</h1>
        <div className="mainBody">
          {this.state.showFakeBox ? <input onChange = {this.handleFakeBoxChange}  type="text"/> : null}
          {!this.state.showThrillResult ? null : <div className="pickedItem">{this.state.itemToShow}</div>}
          <div onChange = {this.handleAddBoxChange} className="inputItem">
            <button className="add">Add an Item</button>  <button onClick = {this.showThrill} className="pick">Thrill Us</button>
            <input type="text" />
          </div>
          <div className="enteredItems">
            {this.state.randItems.map((randItem) => {
              return (
                <div>
                  {randItem}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
