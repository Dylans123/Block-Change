pragma solidity >=0.4.21 <0.7.0;

contract PetitionList {
  uint public petitionCount = 0;

  struct Petition {
    uint id;
    uint voteCount;
    string title;
    string description;
    string recipient;
    string category;
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
    createPetition(
      "First Petition",
      "This is a description for the first petition",
      "Dylan",
      "Skelly",
      "dylanskelly@gmail.com",
      "Health",
      "President of the United States"
    );
    createPetition(
      "Second Petition",
      "This is a description for the second petition",
      "Second Dylan",
      "Second Skelly",
      "anotherdylanskelly@gmail.com",
      "Health",
      "President of the United States"
    );
    createVote(
      0,
      "Another",
      "Dylan",
      "anotherdylan@gmail.com"
    );
  }

  function createPetition(
    string memory _title, string memory _description, string memory _creatorFirstName, string memory _creatorLastName, string memory _creatorEmail, string memory _category, string memory _recipient
  ) public {
    petitions[petitionCount].title = _title;
    petitions[petitionCount].description = _description;
    petitions[petitionCount].category = _category;
    petitions[petitionCount].recipient = _recipient;
    petitions[petitionCount].votes.push(Vote(petitionCount, _creatorFirstName, _creatorLastName, _creatorEmail));
    petitions[petitionCount].voteCount = petitions[petitionCount].votes.length;
    emit PetitionCreated(petitionCount, _title, _description, _creatorFirstName, _creatorLastName, _creatorEmail);
    petitionCount ++;
  }

  function createVote(uint _id, string memory _firstName, string memory _lastName, string memory _email) public {
    petitions[_id].votes.push(Vote(petitions[_id].voteCount, _firstName, _lastName, _email));
    petitions[_id].voteCount ++;
    emit VoteCreated(_id, _firstName, _lastName, _email);
  }
}