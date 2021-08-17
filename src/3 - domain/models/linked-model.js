module.exports = class LinkedModel {
  constructor (res) {
    this.idDebt = res.idDebt
    this.idUser = res.idUser
    this.firstName = res.user.firstName
    this.lastName = res.user.lastName
    this.isPayment = res.isPayment
    this.checkingCopy = res.checkingCopy
  }
}
