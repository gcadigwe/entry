// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeBox {
  uint public count = 0;


  mapping(uint => File) public files; 

    struct File {
  	uint id;
  	string hash;
  	address author;
  }

  event FileCreated(
  	uint id,
  	string hash,
  	address author

  	);

  function uploadFile(string memory _hash, address _author) public {
  	require(bytes(_hash).length > 0);
		require(_author == msg.sender);
  	count++;
  

  	files[count] = File(count,_hash,msg.sender);

  	 //emitting event
  	emit FileCreated(count,_hash,msg.sender);


  }


}