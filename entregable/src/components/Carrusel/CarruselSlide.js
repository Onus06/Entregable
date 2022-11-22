import React from 'react'

const CarruselSlide = (props) => {
    const { slideTitle, slideDescription, slideBg } = props
    return (
        <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
            <div className="textWrap">
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>
    )
}

export default CarruselSlide