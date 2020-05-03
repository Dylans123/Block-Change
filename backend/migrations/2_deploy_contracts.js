var PetitionList = artifacts.require("./PetitionList.sol");

module.exports = function(deployer) {
  deployer.deploy(PetitionList);
};