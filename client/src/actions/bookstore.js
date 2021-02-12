import api from '../utils/api'
import displayErrors from '../utils/displayErrors'
import { toastr } from 'react-redux-toastr'
import {
  GET_BOOKSTORE,
  ADD_EDIT_BOOK,
  LOAD_EDIT_BOOK,
  UPDATE_EDIT_BOOK,
  GET_ACCOUNT
} from './types'

// API: Get a bookstore with its description and all its books
export const getBookstoreByUsername = (username) => async (dispatch) => {
  try {
    if (username === 'auth') {
      const bookstoreBooks = (await api.get(`/bookstores/${username}`)).data
        .data

      console.log('auth', { bookstoreBooks })

      dispatch({
        type: GET_BOOKSTORE,
        payload: bookstoreBooks
      })
    } else {
      const bookstoreBooks = (await api.get(`/bookstores/${username}`)).data
        .data

      console.log('notauth', bookstoreBooks.books)

      dispatch({
        type: GET_BOOKSTORE,
        payload: bookstoreBooks.books
      })
    }
  } catch (error) {
    displayErrors(error)
  }
}

export const getAccountByUsername = (username) => async (dispatch) => {
  console.log("HI")
  try {
    if (username === 'auth') {
      const bookstoreAccount = (await api.get(`/bookstores/${username}`)).data
        .data

      dispatch({
        type: GET_ACCOUNT,
        payload: bookstoreAccount
      })
    } else {
      const bookstoreAccount = (await api.get(`/bookstores/${username}`)).data
        .data

      console.log('bookstoreAccount action: ', bookstoreAccount)

      dispatch({
        type: GET_ACCOUNT,
        payload: bookstoreAccount
      })
    }
  } catch (error) {
    displayErrors(error)
  }
}

// Util: Add book
export const addEditBook = (formData) => async (dispatch) => {
  dispatch({
    type: ADD_EDIT_BOOK,
    payload: formData
  })
}

// API: Get a book by id
export const getBook = (bookId) => async (dispatch) => {
  try {
    console.log({ bookId })
    const book = (await api.get(`/books/${bookId}`)).data.data
    console.log({ book })
    dispatch({
      type: LOAD_EDIT_BOOK,
      payload: book
    })
  } catch (error) {
    displayErrors(error)
  }
}

// API: Update a book Listing
export const updateBook = (bookId, book) => async (dispatch) => {
  try {
    const updatedBook = (await api.put(`/books/${bookId}`, book)).data.data

    toastr.success('Book listing updated successfully')

    dispatch({
      type: UPDATE_EDIT_BOOK,
      payload: updatedBook
    })
  } catch (error) {
    displayErrors(error)
  }
}

// API: Delete a book Listing
export const deleteBookById = (bookId) => async (dispatch) => {
  try {
    await api.delete(`/books/${bookId}`)
    const response = await api.get(`/bookstores/auth`)
    const books = response.data.data

    toastr.success('Book has been deleted.')

    dispatch({
      type: GET_BOOKSTORE,
      payload: books
    })
  } catch (error) {
    displayErrors(error)
  }
}
