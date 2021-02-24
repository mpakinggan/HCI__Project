// Code based on code from Discussion Section Week 7

import React, { Component } from "react";
import TabList from "./components/TabList";
import Body from "./components/Body";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {active :1}
    this.changetab = (id) => {
      this.setState({
        active :id
      })
    }
  }

  render() {
    const tabs = [{
      id: 1, title: 'Text'
    },
    {
      id: 2, title: 'Image'
    },
    {
      id: 3, title: 'Video'
    },
    {
      id: 4, title: 'Table'
    }, 
    {
      id: 5, title: 'Email'
    } 
    ]

    return(
      <div className="App">
        <h1>HCI Project</h1>
        <div className="nav-bar">
          <TabList tabs = {tabs} activeTab = {this.state.active} ctab = {this.changetab}/>
        </div>
        <div className="main-body">
          <Body activeTab={this.state.active}/>
        </div>
        <button class="scrollToTopBtn">⬆︎</button>
        <script src="./toTopButton.js"></script>
      </div>
    );
  }
}

export default App;