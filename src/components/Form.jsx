import React from 'react'
import PropTypes from 'prop-types'

const Form = ({handleSubmit}) => {
    return (
        <>
            <form class="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="text" name="inputText" placeholder="Search" aria-label="Search" autoComplete="off"></input>
            <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
        </>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func,
}

export default Form
