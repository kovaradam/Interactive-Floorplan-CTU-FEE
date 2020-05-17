export default class Person {
  constructor(public readonly fullName: string, public readonly username: string, public rooms: string[]) {}

  addRoom(...rooms: string[]) {
    this.rooms.push(...rooms);
  }
}
