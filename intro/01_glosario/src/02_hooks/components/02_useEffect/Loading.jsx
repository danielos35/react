import React from 'react'

export const Loading = () => {
  return (
    <>
        <button class="btn btn-primary" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Loading...
        </button>
    </>
  )
}
