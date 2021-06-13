const DeBox = artifacts.require('DeBox');

contract('DeBox', async (accounts) => {
  let instance;

  it('stores files in the smart contract', function () {
    return DeBox.deployed()
      .then(function (instance) {
        ContractInstance = instance;
        return ContractInstance.uploadFile('12345', 'gcsarzy', {
          from: accounts[0],
        });
      })
      .then(function (receipt) {
        assert.equal(receipt.logs.length, 1, 'triggers one event');
        assert.equal(
          receipt.logs[0].event,
          'FileCreated',
          'should be the "FileCreated" event'
        );
        assert.equal(
          receipt.logs[0].args.hash,
          '12345',
          'matches the hash in the transaction'
        );
        assert.equal(
          receipt.logs[0].args.userId,
          'gcsarzy',
          'matches the userId'
        );
        assert.equal(
          receipt.logs[0].args.author,
          accounts[0],
          'matches the creator of the transaction'
        );
      });
  });
});
