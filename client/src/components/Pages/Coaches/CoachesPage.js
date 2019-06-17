import React, { useEffect, useReducer } from 'react'
import useMany from '../../hooks/useMany'
import reducer from './coachesReducer'

const CoachesPage = props => {
    const [coaches, loading, error] = useMany('coaches')

    if (loading) {
        // build a custom loading component
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

    if (error) {
        // build a custom error handling component
        return (
            <div class="alert alert-danger" role="alert">
                Oops! Something went wrong.
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1 className="m-5">Coaches</h1>
            <div className="mx-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Campus</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coaches.map(coach => (
                            <tr key={coach.id}>
                                <td>{coach.fullname}</td>
                                <td>{coach.email}</td>
                                <td>{coach.phone}</td>
                                <td>{coach.campus}</td>
                                <td>
                                    <button className="btn btn-success btn-sm mx-1">
                                        View
                                    </button>
                                    <button className="btn btn-warning btn-sm mx-1">
                                        Edit
                                    </button>
                                    <button className="btn btn-danger btn-sm mx-1">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CoachesPage
