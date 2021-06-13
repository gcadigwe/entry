const DeBox = artifacts.require('DeBox.sol');

module.exports = async function (deployer, network, addresses) {
  if (network === 'develop') {
    await deployer.deploy(DeBox);
    const debox = await DeBox.deployed();
  }
};
