import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends React.Component {
  state = {
    randItems: [],
    showFakeBox: false,
    showThrillResult: false,
    itemToShow: '',
    itemToAdd: ''
  };
  handleFakeBoxChange = this.handleFakeBoxChange.bind(this)
  showThrill = this.showThrill.bind(this)
  handleAddBoxChange = this. handleAddBoxChange.bind(this)
  addItem = this.addItem.bind(this)
  removeItem = this.removeItem.bind(this)

  //handles the state change of the text that will actually be displayed
  handleFakeBoxChange(e) {
    this.setState({itemToShow: e.target.value})
  }
  //handles the state change of the add item box
  handleAddBoxChange(e) {
    this.setState({itemToAdd: e.target.value})
  }
  //reveals the predetermined text
  showThrill() {
    this.setState({showThrillResult: true})
  }
  //adds the text in the add item box to state, rendering it out onto the page
  addItem() {
    let oldList = this.state.randItems
    oldList.push(this.state.itemToAdd)
    this.setState({randItems: oldList})
  }
  //removes the item from render and from the state's array of items
  removeItem(i) {
    let oldList = this.state.randItems
    oldList.splice(i, 1)
    this.setState({randItems: oldList})
  }



  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Random Picker</h1>
        <div className="mainBody">
          {this.state.showFakeBox ? <input onChange = {this.handleFakeBoxChange}  type="text"/> : null}
          {!this.state.showThrillResult ? null : <div className="pickedItem" style={{padding: '10px'}}>{this.state.itemToShow}</div>}
          <div onChange = {this.handleAddBoxChange} className="inputItem">
            <button className="add" onClick = {this.addItem}>Add an Item</button>  <button onClick = {this.showThrill} className="pick">Thrill Us</button>
            <input type="text" />
          </div>
          <div className="enteredItems">
            {this.state.randItems.map((randItem, ind) => {
              return (
                <div>
                  {randItem}     <button onClick = {() => this.removeItem(ind)} className="remove">X</button>
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
