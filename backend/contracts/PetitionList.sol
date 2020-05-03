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
      "Clean Water in Flint",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Gravida dictum fusce ut placerat orci. A iaculis at erat pellentesque adipiscing commodo elit. Commodo ullamcorper a lacus vestibulum sed arcu. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Mauris rhoncus aenean vel elit scelerisque mauris. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vitae turpis massa sed elementum tempus egestas sed sed risus",
      "Dylan",
      "Skelly",
      "dylanskelly@gmail.com",
      "Humanitarian",
      "Flint Mayor"
    );
    createPetition(
      "Stop Big Businesses from Taking Small Business Loans",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Gravida dictum fusce ut placerat orci. A iaculis at erat pellentesque adipiscing commodo elit. Commodo ullamcorper a lacus vestibulum sed arcu. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Mauris rhoncus aenean vel elit scelerisque mauris. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nunc sed id semper risus in hendrerit gravida rutrum quisque. Vitae turpis massa sed elementum tempus egestas sed sed risus",
      "Second Dylan",
      "Second Skelly",
      "anotherdylanskelly@gmail.com",
      "Finance",
      "Big Businesses"
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
    petitions[petitionCount].id = petitionCount;
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