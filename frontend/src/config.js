export const PETITION_LIST_ADDRESS = "0xA40093490E75758a3493b3781D2a0Aa0dBBA6c31"
export const PETITION_LIST_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "petitions",
    "outputs": [
      {
        "name": "id",
        "type": "uint256"
      },
      {
        "name": "voteCount",
        "type": "uint256"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "recipient",
        "type": "string"
      },
      {
        "name": "category",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x3ad50ded"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "petitionCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x61ab1f09"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "description",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "creatorFirstName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "creatorLastName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "creatorEmail",
        "type": "string"
      }
    ],
    "name": "PetitionCreated",
    "type": "event",
    "signature": "0x492297c097afce05595d715e035fab336852484c58ef49477673ae2a8a3ea14f"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "firstName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "lastName",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "email",
        "type": "string"
      }
    ],
    "name": "VoteCreated",
    "type": "event",
    "signature": "0xe33023e944db00210b9bcd79a869ad15ab8b6c9a54f3e61d1484f922e79c6017"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_title",
        "type": "string"
      },
      {
        "name": "_description",
        "type": "string"
      },
      {
        "name": "_creatorFirstName",
        "type": "string"
      },
      {
        "name": "_creatorLastName",
        "type": "string"
      },
      {
        "name": "_creatorEmail",
        "type": "string"
      },
      {
        "name": "_category",
        "type": "string"
      },
      {
        "name": "_recipient",
        "type": "string"
      }
    ],
    "name": "createPetition",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xb83fce58"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_id",
        "type": "uint256"
      },
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "createVote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xc576e11b"
  }
]