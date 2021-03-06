const registerUserValidator = require('../registerUserValidator')

const ApiGeneralError = require('../../utils/ApiGeneralError')

describe('Test Suite: registerUserValidator.test.js', () => {
  test('The happy path - everything works', () => {
    // 1. Arrange
    const data = {
      first_name: 'johnny',
      last_name: 'boi',
      username: 'johnnyboi',
      email: 'johndoe@gmail.com',
      password: 'superduperpassword',
      password_confirmation: 'superduperpassword'
    }

    // 2. Act
    let validator = registerUserValidator(data)

    // 3. Assert
    expect(Object.keys(validator.errors.errors).length).toEqual(0)
  })

  test('Not matching passwords', () => {
    // 1. Arrange
    const data = {
      email: 'johndoe@gmail.com',
      password: 'superduperpassword',
      password_confirmation: 'superduperpassword1'
    }

    // 2. + 3. Act and Assert
    expect(() => {
      registerUserValidator(data)
    }).toThrow(ApiGeneralError)
  })
})
