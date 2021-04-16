//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.3;

contract Todo {
    struct Item {
        uint256 id;
        string name;
        bool completed;
    }

    Item[] public items;

    uint256 public nextId;

    function getAll() public view returns (Item[] memory) {
        return (items);
    }

    function addTodo(string memory name) public {
        items.push(Item(nextId, name, false));
        nextId++;
    }

    function read(uint256 id)
        public
        view
        returns (
            uint256 itemid,
            string memory name,
            bool completed
        )
    {
        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                return (items[i].id, items[i].name, items[i].completed);
            }
        }
    }

    function toggle(uint256 id, bool completed) public {
        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i].completed = completed;
            }
        }
    }

    function changeName(uint256 id, string memory name) public {
        for (uint256 i = 0; i < items.length; i++) {
            if (items[i].id == id) {
                items[i].name = name;
            }
        }
    }

    function deleteTodo(uint256 id) public {
        delete items[id];
    }
}
