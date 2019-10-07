const jwt = require('jsonwebtoken')
const { secret, expiresIn } = require('../config').tokenConfig

const makeAuthenResponse = (user) => {
  const roles=user.roles.length>0?user.roles:['customer'] 
  const token = jwt.sign({
    email: user.email,
    id: user._id,
    roles
  },
  secret, { expiresIn: expiresIn })
  const response = {
    email: user.email, 
    token: token,
    id:user._id,
    roles
  }
  return response
}

module.exports = {makeAuthenResponse}