module.exports = class UserModel {
  constructor (res) {
    this.id = res.id
    this.firstName = res.firstName
    this.lastName = res.lastName
  }
}
