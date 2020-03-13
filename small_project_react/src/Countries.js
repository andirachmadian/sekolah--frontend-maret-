import React from 'react'

const countries = ['Indonesia', 'Malaysia', 'Myanmar', 'Singapore', 'Thailand', 'Kamboja'];

function Countries () {

    const onSelectChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <select onChange={onSelectChange}>
            {
                countries.map(c => {
                    return <option>{c}</option>
                })
            }
        </select>
    )
}

export default Countries