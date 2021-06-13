// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DeBox {
  uint public count = 0;


  mapping(uint => File) public files; 

    struct File {
  	uint id;
  	string hash;
  	string userId;
  	address author;
  }

  event FileCreated(
  	uint id,
  	string hash,
  	string userId,
  	address author

  	);

  function uploadFile(string memory _hash, string memory _userId) public {
  	require(bytes(_hash).length > 0);
    require(bytes(_userId).length > 0);
  	count++;
  

  	files[count] = File(count,_hash,_userId,msg.sender);

  	 //emitting event
  	emit FileCreated(count,_hash,_userId,msg.sender);


  }


}