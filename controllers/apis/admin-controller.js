const adminServicers = require('../../services/admin-servicers')

const adminController = {
  getRestaurants: (req, res, next) => {
    adminServicers.getRestaurants(req, (err, data) => err ? next(err) : res.json(data))
  }
}

module.exports = adminController
