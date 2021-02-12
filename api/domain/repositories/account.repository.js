const accountModel = require('../models/account.model')
const AccountModel = require('../models/account.model')
const BookstoreModel = require('../models/bookstore.model')
const userModel = require('../models/user.model')

const getById = async (userId) => {
  const account = await AccountModel.findOne({ userId })
  return account
}

const updateById = async (userId, data) => {
  await AccountModel.updateOne({ userId }, data)
  const updatedAccount = await AccountModel.findOne({ userId })
  return updatedAccount
}

const getAccountByUsername = async (username, data) => {
  const user = await userModel.findOne({ username }, data)
  const account = await accountModel.findOne({ _id: user._id })
  return account
}

const createByUserId = async (userId) => {
  const userBookstoreData = new AccountModel({ userId })
  const newBookstore = await userBookstoreData.save({ userId })
  return newBookstore
}

module.exports = {
  getById,
  updateById,
  getAccountByUsername,
  createByUserId
}
