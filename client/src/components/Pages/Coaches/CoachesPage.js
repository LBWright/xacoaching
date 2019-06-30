import React from 'react'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import { Loading, Error } from '../../Layout'

const CoachesPage = props => {
    const [coaches, loading, error] = useData({ resource: 'coaches' })

    if (loading) return <Loading />

    if (error) return <Error />

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
                                <td>{coach.name}</td>
                                <td>{coach.email}</td>
                                <td>{coach.phone}</td>
                                <td>{coach.campus}</td>
                                <td>
                                    <Link
                                        className="btn btn-success btn-sm mx-1"
                                        to={`/coaches/${coach.id}`}
                                    >
                                        View
                                    </Link>
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
