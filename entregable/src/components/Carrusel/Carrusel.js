import React, { useState, useEffect, useCallback } from "react";
import { client } from "../../client";
import CarruselSlide from "./CarruselSlide";
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import Loader from "../Loader/Loader";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation])

const Carrusel = () => {
    const [isCarruselLoading, setIsCarruselLoading] = useState(false)
    const [carruselSlides, setCarruselSlides] = useState([])

    const cleanUpCarruselSlides = useCallback((rawData) => {
        const cleanSlides = rawData.map((slide) => {
            const { sys, fields } = slide
            const { id } = sys
            const slideTitle =fields.title
            const slideDescription = fields.description
            const slideBg = fields.image.fields.file.url
            const updateSlide = { id, slideTitle, slideDescription, slideBg}
            return updateSlide
        })

        setCarruselSlides(cleanSlides)
    }, [])

    const getCarruselSlides = useCallback (async () => {
        setIsCarruselLoading(true)
        try {
            const response = await client.getEntries({ content_type: 'carrusel' })
            console.log(response)
            const responseData = response.items
            if (responseData) {
            cleanUpCarruselSlides(responseData)
            } else {
                setCarruselSlides([])
            }
            setIsCarruselLoading(false)
        } catch (error) {
            console.log(error)
            setIsCarruselLoading(false)
        }
    }, [cleanUpCarruselSlides])

    useEffect(() => {
        getCarruselSlides()
    }, [getCarruselSlides])

    if (isCarruselLoading) {
        return <Loader />
    }
    
    //console.log(carruselSlides)
    if (!Array.isArray(carruselSlides) || !carruselSlides.length) {
        return null
    }

    return (
        <div className="carousel">
            <Swiper navigation={true} modules={[Navigation]}>
                    {carruselSlides.map((item) => {
                        const { id, slideBg, slideTitle, slideDescription } = item
                        return(
                            <SwiperSlide key={id}>
                                <CarruselSlide slideTitle={slideTitle} slideDescription={slideDescription}
                                slideBg={slideBg} />
                            </SwiperSlide>                    
                        )
                    })}
            </Swiper>
        </div>
    )
}

export default Carrusel