import React from 'react'

const Error = () => {
    return (
        <div class="alert alert-danger" role="alert">
            Oops! Something went wrong.
            <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
            >
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default Error
