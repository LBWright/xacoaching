import React from 'react'
import useData from '../../hooks/useData'

const SingleCoachPage = ({ match: { id } }) => {
    const [coach, loading, error] = useData({ id, resource: 'coaches' })
    console.log(coach)
    return (
        <div>
            <h1 className="m-5">Single Coach Page</h1>
        </div>
    )
}

export default SingleCoachPage
