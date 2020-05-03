pragma solidity >=0.4.21 <0.7.0;

contract PetitionList {
  uint public petitionCount = 0;

  struct Petition {
    uint id;
    uint voteCount;
    string title;
    string description;
    Vote[] votes;
  }

  mapping(uint => Petition) public petitions;

  struct Vote {
    uint id;
    string firstName;
    string lastName;
    string email;
  }

  event PetitionCreated(
    uint id,
    string title,
    string description,
    string creatorFirstName,
    string creatorLastName,
    string creatorEmail
  );

  event VoteCreated(
    uint id,
    string firstName,
    string lastName,
    string email
  );

  constructor() public {
    createPetition("First Petition", "This is a description for the first petition", "Dylan", "Skelly", "dylanskelly@gmail.com");
  }

  function createPetition(
    string memory _title, string memory _description, string memory _creatorFirstName, string memory _creatorLastName, string memory _creatorEmail
  ) public {
    petitions[petitionCount].title = _title;
    petitions[petitionCount].description = _description;
    petitions[petitionCount].voteCount = 1;
    petitions[petitionCount].votes.push(Vote(petitionCount, _creatorFirstName, _creatorLastName, _creatorEmail));
    emit PetitionCreated(petitionCount, _title, _description, _creatorFirstName, _creatorLastName, _creatorEmail);
    petitionCount ++;
  }

  function CreateVote(uint _id, string memory _firstName, string memory _lastName, string memory _email) public {
    petitions[_id].votes.push(Vote(petitions[_id].voteCount, _firstName, _lastName, _email));
    emit VoteCreated(_id, _firstName, _lastName, _email);
    petitionCount ++;
  }
}