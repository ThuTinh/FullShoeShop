const { handleError } = require('../common')
const jwt = require('jsonwebtoken')
const {secret} = require('../config').tokenConfig
const {ADMIN} = require('../common/constant')

const requestIsNoNeedAuthen = [
  {
    'url': '/v1/auth/login',
    'method': 'POST'
  },
  {
    'url': '/v1/auth/facebook',
    'method': 'POST'
  },
  {
    'url': '/v1/auth/google',
    'method': 'POST'
  },
  {
    'url': '/v1/users',
    'method': 'POST'
  },
  {
    'url': '/v1/users/reset/password',
    'method': 'GET'
  },
  {
    'url':'/v1/brands',
    'method':'GET'
  },
  {
    'url':'/v1/brands:name',
    'method':'GET'
  },
  {
    'url':'/v1/orders',
    'method':'POST'
  },
  {
    'url':'/v1/categories',
    'method':'GET'
  }
  
]

const requestIsOptionalAuthen = [
  {
    'url': '/v1/products/*',
    'method': 'GET'
  },
  {
    'url':'/v1/stores/*',
    'method':'GET'
  },
  {
    'url':'/v1/brands/*',
    'method':'GET'
  },
  {
    'url':'/v1/tags/*',
    'method':'GET'
  },
  {
    'url':'/v1/campaigns/*',
    'method':'GET'
  },
 
  {
    'url':'/v1/carts',
    'method':'GET'
  },
  {
    'url':'/v1/carts',
    'method':'POST'
  },
  {
    'url':'/v1/carts',
    'method':'DELETE'
  },
  {
    'url':'/v1/posts',
    'method':'GET'
  }
]

const requestAuthenForAdmin = [
  {
    'url':'/v1/users/changeRole',
    'method':'PUT'
  }
]





const first = (req, res, next) => {
  const reqIsNoNeedAuthen = requestIsNoNeedAuthen.find(r => req.path.match(r.url + '$') && r.method === req.method)
  const reqIsOptionalAuthen = requestIsOptionalAuthen.find(r => req.path.match(r.url) && r.method === req.method)
  const reqAuthenForAdmin = requestAuthenForAdmin.find(r => req.path.match(r.url + '$') && r.method === req.method)
  try {
    if (reqIsNoNeedAuthen) {
      next()
      return
    }
    const user = decodeToken(req.headers)
    req.email = user.email
    req.id = user.id 
    req.roles=user.roles?user.roles:['customer']
    // if(user.roles&&((reqAuthenForAdmin && user.roles.includes(ADMIN)))){ 
    next()
    //   return 
    // 
    // throw new Error('Role permission deny')
  }catch (error) {
    if(reqIsOptionalAuthen&&!reqAuthenForAdmin) {
      next()
      return
    }
    res.status(401).json(handleError(error))
  }
}

const decodeToken = (header) => {
  if (!header.authorization) {
    throw new Error('Missing \'authorization\'')
  }
  const authorization = header.authorization.split(' ').filter(i => i)
  const isInvalidAuthorization = !authorization || authorization.length < 2 || authorization[0] !== 'Bearer'
  if (isInvalidAuthorization) {
    throw new Error('\'authorization\' is invalid')
  }

  return jwt.verify(authorization[1], secret)
}

module.exports = { first }