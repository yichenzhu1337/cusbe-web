import React from 'react'
import renderer from 'react-test-renderer'
import { render, act, fireEvent, waitFor, screen } from '@testing-library/react'

import AccountBookstoreForm from '../AccountBookstoreForm'

describe('Component: AccountBookstoreForm', () => {
  const promise = Promise.resolve()

  const props = {
    auth: {
      user: {
        first_name: 'john',
        last_name: 'doe'
      }
    },
    getAccountSettings: jest.fn(() => {
      return promise
    }),
    saveAccountSettings: jest.fn(() => {
      return promise
    }),
    updateAuthUser: jest.fn(() => {
      return promise
    })
  }

  it('should match the snapshot', async () => {
    const accountBookstoreFormSnapshot = renderer
      .create(<AccountBookstoreForm {...props} />)
      .toJSON()

    expect(accountBookstoreFormSnapshot).toMatchSnapshot()
  })

  it('should render properly', async () => {
    const { getAllByRole, getByText, getAllByText } = render(
      <AccountBookstoreForm {...props} />
    )

    getByText('Bookstore Settings')
    getByText('Change Username')
    getByText('Location')
    getByText('School')

    getAllByRole('button')
    getAllByText('Save Changes')

    await act(() => {
      return promise
    })
  })

  // fireEvent
  it('should save the changes - buttons 1 and 2', async () => {
    const { getAllByText } = render(<AccountBookstoreForm {...props} />)

    const saveChangesButton1 = getAllByText('Save Changes')[0]
    const saveChangesButton2 = getAllByText('Save Changes')[1]

    fireEvent.click(saveChangesButton1)
    fireEvent.click(saveChangesButton2)

    await act(() => {
      return promise
    })
  })
})
