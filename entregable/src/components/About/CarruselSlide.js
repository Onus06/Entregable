import React from 'react'

const CarruselSlide = (props) => {
    const { slideTitle, slideDescription, slideBg } = props
    return (
        <div>
        <div className="slideWrap" style={{ backgroundImage: `url(${slideBg})` }}>
            <div className="textWrap">
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
            
        </div>
        <div className="textWrap">
        <a href="https://d2nz2gwc4w9br.cloudfront.net/checkout" className="btn">Agregar</a>
        </div>
        </div>
    )
}

export default CarruselSlide