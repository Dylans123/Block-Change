var PetitionList = artifacts.require("../contracts/PetitionList.sol");

module.exports = function(deployer) {
  deployer.deploy(PetitionList);
};