import React, { Component } from 'react'
import Web3 from 'web3'
import Header from './components/Header.js'
import PetitionCard from './components/PetitionCard.js'
import SignModal from './components/SignModal.js'
import CreateModal from './components/CreateModal.js'
import CoverPhoto from './assets/Home-Cover.png'
import { Container } from '@material-ui/core'
import { PETITION_LIST_ABI, PETITION_LIST_ADDRESS } from './config'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      petitionList: null,
      petitionCount: -1,
      petitions: [],
      loading: false,
      curPetition: null,
      signOpen: false,
      createOpen: false
    }
    this.handleSignOpen = this.handleSignOpen.bind(this);
    this.handleSignClose = this.handleSignClose.bind(this);
    this.handleCreateOpen = this.handleCreateOpen.bind(this);
    this.handleCreateClose = this.handleCreateClose.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.createVote = this.createVote.bind(this);
    this.handleSignature = this.handleSignature.bind(this);
  }

  componentDidMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const petitionList = new web3.eth.Contract(PETITION_LIST_ABI, PETITION_LIST_ADDRESS)
    this.setState({ petitionList })
    const petitionCount = await petitionList.methods.petitionCount().call();
    this.setState({ petitionCount });
    for (let i = 0; i < petitionCount; ++i) {
      const petition = await petitionList.methods.petitions(i).call()
      this.setState({ petitions: [...this.state.petitions, petition] })
    }
  }

  createPetition(content) {
    this.setState({ loading: true })
    this.state.petitionList.methods
    .createPetition(
      content._title,
      content._description,
      content._creatorFirstName,
      content._creatorLastName,
      content._creatorEmail,
      content._category,
      content._recipient
    )
    .send({ from: this.state.account })
    .once('receipt', async (receipt) => {
      this.setState({ petitions: [] });
      await this.loadBlockchainData();
      this.setState({ loading: false })
    })
  }

  createVote(content) {
    this.setState({ loading: true })
    this.state.petitionList.methods
    .createVote(
      content._id,
      content._firstName,
      content._lastName,
      content._email
    )
    .send({ from: this.state.account })
    .once('receipt', async (receipt) => {
      this.setState({ petitions: [] })
      await this.loadBlockchainData();
      this.setState({ loading: false })
    })
  }

  handleCreate(info) {
    const content = {
      _title: info.title,
      _description: info.description,
      _category: info.category,
      _recipient: info.recipient,
      _creatorFirstName: info.firstName,
      _creatorLastName: info.lastName,
      _creatorEmail: info.email
    }
    this.createPetition(content);
    this.handleCreateClose();
  }

  handleSignature(petition, signee) {
    const content = {
      _id: petition.id,
      _firstName: signee.firstName,
      _lastName: signee.lastName,
      _email: signee.email
    }
    this.createVote(content);
    this.handleSignClose();
  }

  handleSignOpen(petition) {
    this.setState({ curPetition: petition, signOpen: true })
  }

  handleSignClose() {
    this.setState({ curPetition: null, signOpen: false })
  }

  handleCreateOpen() {
    this.setState({ createOpen: true })
  }

  handleCreateClose() {
    this.setState({ createOpen: false })
  }

  render() {
    const { signOpen, createOpen, petitions, curPetition } = this.state;
    return (
      <div>
        <SignModal open={signOpen} handleClose={this.handleSignClose} handleSignature={this.handleSignature} petition={curPetition} />
        <CreateModal open={createOpen} handleClose={this.handleCreateClose} handleCreate={this.handleCreate} />
        <Header handleOpen={this.handleCreateOpen}/>
        <Container maxWidth="md">
          <div style={{ width: '100%' }}>
            <div className="row my-5" style={{ display: 'flex', alignItems: 'center', fontStyle: 'italic' }}>
              <div className="col-6">
                <div>
                  <blockquote>A platform for the future of change</blockquote>
                </div>
              </div>
              <div className="col-6">
                <img src={CoverPhoto} style={{ height: '100%', width: '120%' }}/>
              </div>
            </div>
          </div>
            <div>
              <div className="mt-5 mb-2" style={{ fontSize: '30px', fontWeight: 'bold' }}><b>What's happening on the blockchange?</b></div>
              {petitions.map((petition) => {
                return (
                  <PetitionCard petition={petition} handleOpen={this.handleSignOpen} />
                )
              })}
            </div>
        </Container>
      </div>
    );
  }
}

export default App;
