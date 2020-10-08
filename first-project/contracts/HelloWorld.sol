pragma solidity 0.5.1;

contract HelloWorld {
  string public _greeting;

  function setGreeting(string memory greeting) public {
    _greeting = greeting;
  }

  function getGreeting() public view returns(string memory) {
    return _greeting;
  }
}