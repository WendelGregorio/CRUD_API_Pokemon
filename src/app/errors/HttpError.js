class HttpError extends Error {
  constructor(statusCode, errorType, message) {
    super(message)
    this.statusCode = statusCode
    this.type = errorType
  }
}

module.exports = { HttpError }