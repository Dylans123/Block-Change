import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { PETITION_LIST_ABI, PETITION_LIST_ADDRESS } from './config'

class App extends Component {
  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const petitionList = new web3.eth.Contract(PETITION_LIST_ABI, PETITION_LIST_ADDRESS)
    const petitionCount = await petitionList.methods.petitionCount().call()
    this.setState({ petitionCount });
    for (let i = 0; i < petitionCount; ++i) {
      const petition = await petitionList.methods.petitions(i).call()
      console.log(petition)
      this.setState({ petitions: [...this.state.petitions, petition] })
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      petitionCount: -1,
      petitions: []
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Hello, World!</h1>
        <p>Your account: {this.state.account}</p>
        <p>Your petiton count: {this.state.petitionCount}</p>
        {this.state.petitions.map((petition, index) => {
          return (
            <div>
              {petition.toString()}
              {index}
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
