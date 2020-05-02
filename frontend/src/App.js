import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    if (window.ethereum) {
      console.log("woah")
      window.web3 = new Web3(window.ethereum);
      try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          const accounts = await window.web3.eth.getAccounts()
          console.log(accounts)
          this.setState({ account: accounts[0] })
      } catch (error) {
          // User denied account access...
      }
    }
  }

  constructor(props) {
    super(props)
    this.state = { account: '' }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
      </div>
    );
  }
}

export default App;
