pragma solidity ^0.6.4;

contract PetitionList {
  uint public taskCount = 0;

  struct Petition {
    uint id;
    string title;
    string description;
    Vote[] votes;
  }

  struct Vote {
    uint id;
    string firstName;
    string lastName;
  }

  mapping(uint => Petition) public petition;
}