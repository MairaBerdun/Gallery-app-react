import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ img }) => {
    return (
        <div>
            <div className="card m-3">
                <img src={img} className="card-img-top" style={{ width: '20rem', height:'20rem' }} alt="random.png" />
            </div>
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
}

export default Card
