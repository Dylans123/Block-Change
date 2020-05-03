import React, { Component } from 'react'
import Web3 from 'web3'
import Header from './components/Header.js'
import { Container } from '@material-ui/core'
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
    this.setState({ petitionList })
    const petitionCount = await petitionList.methods.petitionCount().call()
    this.setState({ petitionCount });
    for (let i = 0; i < petitionCount; ++i) {
      const petition = await petitionList.methods.petitions(i).call()
      console.log(petition)
      this.setState({ petitions: [...this.state.petitions, petition] })
    }
  }

  createPetition(content) {
    this.setState({ loading: true })
    this.state.petitionList.methods.createPetition(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  createVote(content) {
    this.setState({ loading: true })
    this.state.petitionList.methods.createVote(content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      petitionList: null,
      petitionCount: -1,
      petitions: []
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Container maxWidth="md">
          {this.state.loading
          ? (
            <div>
              <h1>Hello, World!</h1>
              <p>Your account: {this.state.account}</p>
              <p>Your petiton count: {this.state.petitionCount}</p>
              {this.state.petitions.map((petition, index) => {
                return (
                  <div>
                    {petition.id}<br/>
                    {petition.title}<br/>
                    {petition.description}<br/>
                    {petition.voteCount}<br/>
                    {index}
                  </div>
                )
              })}
            </div>
          )
          : (
            <div>Loading...</div>
          )
          }
        </Container>
      </div>
    );
  }
}

export default App;
