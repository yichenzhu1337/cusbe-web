import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact'
import Books from '../../books/common/Books'
import api from '../../../utils/api'
import {getAccountByUsername} from "../../../actions/bookstore"

const PublicBookstore = ({ match, books, getBookstoreByUsername }) => {
  const [formData, setFormData] = useState({
    location: '',
    school: ''
  })

  const { location, school } = formData

  useEffect(() => {
    // const fetchAccount = async () => {
    //   const res = await api.get('/account')
    //   const { location, school } = res.data.data
    //   setFormData({ location: location, school: school })
    // }
    // fetchAccount()
    getAccountByUsername(match.params.username)
    getBookstoreByUsername(match.params.username)
  }, [match.params.username, getBookstoreByUsername])

  return (
    <>
      <div className="mt-4">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12">
              <h3 className="font-weight-bold">
                Welcome to {match.params.username}'s Bookstore
              </h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <MDBContainer>
          <MDBRow>
            <div className="col-xs-6 ml-4">
              <i
                className="fas fa-map-marker-alt"
                style={{
                  fontSize: '300%',
                  height: '150%',
                  color: 'var(--primary-dark-color)'
                }}
              ></i>
            </div>
            <div className="col-xs-12">
              Located in:
              <br />
              <strong>{location}</strong>
            </div>

            <div className="col-xs-6 ml-4">
              <i
                className="fas fa-graduation-cap"
                style={{
                  fontSize: '300%',
                  height: '150%',
                  color: 'var(--primary-dark-color)'
                }}
              ></i>
            </div>
            <div className="col-xs-12">
              Selling books for:
              <br />
              <strong>{school}</strong>
            </div>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className="mt-4">
        <MDBContainer>
          <MDBRow center={true}>
            <MDBCol sm="12">
              {books.length < 1 ? (
                <div>There are no books in this bookstore...</div>
              ) : (
                <Books books={books} />
              )}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  )
}

PublicBookstore.propTypes = {
  match: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  getBookstoreByUsername: PropTypes.func.isRequired
}

export default PublicBookstore
