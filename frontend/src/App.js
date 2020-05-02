import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { PETITION_LIST_ABI, PETITION_LIST_ADDRESS } from './config'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    if (window.ethereum) {
      console.log("woah")
      window.web3 = new Web3(window.ethereum);
      try {
          await window.ethereum.enable();
          const accounts = await window.web3.eth.getAccounts()
          this.setState({ account: accounts[0] })
          const petitionList = new window.web3.eth.Contract(PETITION_LIST_ABI, PETITION_LIST_ADDRESS)
          this.setState({ petitionList })
          console.log(petitionList)
          const petitionCount = await petitionList.methods.petitionCount.call()
          console.log("petition count: " + petitionCount)
      } catch (error) {
          console.log(error)
      }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      petitionList: null,
      petitionCount: 0
    }
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
