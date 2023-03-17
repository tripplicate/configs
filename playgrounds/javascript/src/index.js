import { __dirname } from 'node:fs'

import data from './static/data.json'

import { testModule } from '../modules/test-module'

const arr = [1, 2, 3, 4, 5, 6]

const obj = {
  name     : 'daniel',
  age      : 20, 
  role     : 'developer',
  somedata : 'asd',
}

const someFunction = (a, b, c, d, e) => ({
  ...obj,
  a,
  b,
  c,
  d,
  e,
})

class User {
  name = 'name'

  #privateMethod() {
    return this.name
  }

  static staticMethod() {
    return 0
  } 

  publicMethod() {
    return this.#privateMethod()
  }

}

const user = new User()

// eslint-disable-next-line no-console
console.log('asd', __dirname, testModule, data, arr, obj, user, someFunction)