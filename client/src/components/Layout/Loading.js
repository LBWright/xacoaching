import React from 'react'

const Loading = () => {
    return (
        <div className="text-center mt-5">
            <div
                className="spinner-border text-secondary"
                style={{ width: '7rem', height: '7rem' }}
                role="status"
            >
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
