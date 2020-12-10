const fetch = require('node-fetch')

const userFactory = require('../factories/userFactory')
const bookFactory = require('../factories/bookFactory')

const Account = require('../../domain/models/account.model')
const Book = require('../../domain/models/book.model')
const Bookstore = require('../../domain/models/bookstore.model')
const Message = require('../../domain/models/message.model')
const Password = require('../../domain/models/password.model')
const Room = require('../../domain/models/room.model')
const User = require('../../domain/models/user.model')
const Session = require('../../domain/models/session.model')

const Models = [
  Account,
  Book,
  Bookstore,
  Message,
  Password,
  Room,
  User,
  Session
]

const clearDatabase = async () => {
  try {
    for (Model of Models) {
      await Model.deleteMany({})
    }
    // also clear the mongostore session table: https://stackoverflow.com/questions/24416953/clear-the-session-store
  } catch (err) {
    console.log('clearDatabase, error:', { err })
  }
}

const setUpDatabase = async () => {
  try {
    await clearDatabase()

    const users = await require('../seeds/users.seeds')(10)
    const books = await require('../seeds/books.seeds')(users, 10)
    const rooms = await require('../seeds/rooms.seeds')(users)
    const messages = await require('../seeds/messages.seeds')(rooms, users)
  } catch (err) {
    console.log('setUpDatabase, error:', { err })
  }
}

const seeInDatabase = async (Model, item) => {
  const findItem = await Model.findById(item.id)
  return findItem
}

const getAllTableData = async (Model) => {
  return await Model.find({})
}

const getLogingUserCookies = async (baseURL, user) => {
  user = user || {
    email: 'yichenzhu1337@gmail.com',
    password: 'yichen'
  }

  await fetch(`${baseURL}/auth/logout`, { method: 'GET' })

  const userResponse = await fetch(`${baseURL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })

  // console.log('thecookies', userResponse.headers.get('set-cookie'))

  return userResponse.headers.get('set-cookie')
}

module.exports = {
  setUpDatabase,
  clearDatabase,
  getAllTableData,
  seeInDatabase,
  getLogingUserCookies
}
