// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract AnyOldERC20Token is ERC20 {
  constructor()
    public
    ERC20('Any old ERC20 token', 'AOE') {}

  function mint(uint256 total) external {
    _mint(msg.sender, total);
  }
}
