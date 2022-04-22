const { HttpError } = require('../errors/HttpError')

class BaseController {
  execute(methodName) {
    const requestFunction = async (req, res) => {
      try {
        await this[methodName](req, res)
      } catch (err) {
        console.log(err)
        if (err instanceof HttpError) {
          return res.status(err.statusCode).json({ message: err.message })
        }
        return res.status(500).send({
            message: 'Internal Server Error'
        })
      }
    }

    return requestFunction
  }
}

module.exports = { BaseController }