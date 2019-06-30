import React from 'react'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import { Loading, Error } from '../../Layout'

export default function ClientsPage() {
    const [clients, loading, error] = useData({ resource: 'clients' })

    if (loading) return <Loading />

    if (error) return <Error />

    return (
        <div>
            <h1 className="m-5">Client</h1>
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
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>{client.campus}</td>
                                <td>
                                    <Link
                                        className="btn btn-success btn-sm mx-1"
                                        to={`/clients/${client.id}`}
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
