pragma solidity 0.5.1;

contract SetValue {

  uint constant requiredConfirmations = 3;
  uint confirmations;
  string public _greeting;


  function increase() public {
    confirmations++;
  }

  function setGreeting(string memory greeting) public {
    require(
      confirmations > requiredConfirmations
    );

    _greeting = greeting;
  }

  function getGreeting() public view returns(string memory) {
    return _greeting;
  }

}