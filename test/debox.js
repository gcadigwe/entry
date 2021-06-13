const DeBox = artifacts.require('DeBox');

// require('chai').use(require('chai-as-promised')).should();

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

// it('creates-images', async()=>{
//   assert.equal(imageCount,1)
//   console.log(result.logs[0].args)
//   const event = result.logs[0].args
//   assert.equal(event.id.toNumber(),imageCount.toNumber(),"id is correct")
//   assert.equal(event.hash,hash,"hash is correct")
//   assert.equal(event.description,"Image description","description is correct")
//   assert.equal(event.tipAmount,'0','tip amount is correct')
//   assert.equal(event.author, author,"author is correct")

//   //FAILURE: Image must have hash
// await decentragram.uploadImage('', 'Image description',{frome:author}).should.be.rejected;

// //FAILURE: Image must have description
// await decentragram.uploadImage('Image hash', '',{frome:author}).should.be.rejected;
// })
