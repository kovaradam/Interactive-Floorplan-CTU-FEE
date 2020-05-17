"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(fullName, username, rooms) {
        this.fullName = fullName;
        this.username = username;
        this.rooms = rooms;
    }
    addRoom(...rooms) {
        this.rooms.push(...rooms);
    }
}
exports.default = Person;
//# sourceMappingURL=person.js.map