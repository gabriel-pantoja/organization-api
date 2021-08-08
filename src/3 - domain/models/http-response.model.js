
module.exports = class HttpResponse {
  static ok (res, body) {
    return res.status(200).json(body)
  }

  static badRequest (res, message) {
    return res.status(400).json({ error: message })
  }

  static unauthorized (res, message) {
    return res.status(401).json(message)
  }

//   static serverError (error) {
//     return {
//       statusCode: 500,
//       body: {
//         error: error.message
//       }
//     }
//   }
}
