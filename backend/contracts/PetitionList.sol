pragma solidity ^0.5.0;

contract PetitionList {
  uint public petitionCount = 0;
  mapping(uint => Petition) public petitions;

  struct Petition {
    uint id;
    uint voteCount;
    string title;
    string description;
    Vote[] votes;
    // VoteList voteList;
  }

  struct Vote {
    uint id;
    string firstName;
    string lastName;
    string email;
  }

  event PetitionCreated(
    uint id,
    string title,
    string description
  );

  event VoteCreated(
    uint id,
    string firstName,
    string lastName,
    string email
  );

  function createPetition(string memory _title, string memory _description) public {
    petitionCount ++;
    petitions[petitionCount].title = _title;
    petitions[petitionCount].description = _description;
    petitions[petitionCount].voteCount = 1;
    petitions[petitionCount].votes.push(Vote(petitionCount, "first", "last", "firstlast@gmail.com"));
    emit PetitionCreated(petitionCount, _title, _description);
  }

  function CreateVote(uint _id, string memory _firstName, string memory _lastName, string memory _email) public {
    petitions[_id].voteCount ++;
    petitions[_id].votes.push(Vote(petitions[_id].voteCount, _firstName, _lastName, _email));
    emit VoteCreated(_id, _firstName, _lastName, _email);
  }
}