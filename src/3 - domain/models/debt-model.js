module.exports = class DebtModel {
  constructor (res) {
    this.id = res.id
    this.name = res.name
    this.payDay = res.payDay
    this.price = res.price
    this.isPayment = res.isPayment
    this.responsible = res.responsible
    this.attachment = res.attachment
    this.linkeds = null
  }
}
