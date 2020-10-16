// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.3;

contract Inbox {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}