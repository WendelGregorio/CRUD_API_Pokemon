const { HttpError } = require("./HttpError")

class BadRequest extends HttpError {
  constructor(message) {
    super(400, 'BadRequest', message)
  }
}

module.exports = { BadRequest }