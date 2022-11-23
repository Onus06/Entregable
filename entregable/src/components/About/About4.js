import React, {useState, useEffect, useCallback } from 'react'
import {marked} from 'marked'
import { client } from '../../client'
import Loader from '../Loader/Loader'

const getHTMLData = (rawData) => {
    const htmlString = marked (rawData)
    return htmlString
}

const About4 = () => {
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)

    const cleanUpAbout = useCallback((rawData) => {
            const { sys, fields } = rawData
            const { id } = sys
            const aboutTitle =fields.title
            const aboutContent = getHTMLData (fields.content)
            //const aboutDescription = getHTMLData (fields.description)
            //const aboutDescription = fields.description
            const aboutImage = fields.image.fields.file.url
            let cleanAbout = { id, aboutTitle, aboutContent, aboutImage }

            setAbout(cleanAbout)
        }, [])

    const getAbout = useCallback (async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry('odRHiTjeA7pMKc9s0BImD')
            if (response) {
                cleanUpAbout(response)
            } else {
                setAbout({})
            }
            setIsAboutLoading(false)
        } catch (error) {
            console.log(error);
            setIsAboutLoading(false)
        }
    }, [cleanUpAbout])

    useEffect(() => {
        getAbout()
    }, [getAbout])

    if (isAboutLoading) {
        return <Loader />
    }

    const { aboutTitle, aboutContent, aboutImage, aboutDescription } = about

    return (
        <section className='about' id='about'>
            <div className='row'>
                <div className='column'>
                    <h1>{aboutTitle}</h1>
                    <p></p>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent}} /> 
                    <h3>{aboutDescription}</h3>
                    
                    <div class="d-grid gap-2">
                    <p></p>
                    <p></p>
                    <button class="btn btn-secondary" href='https://d2nz2gwc4w9br.cloudfront.net/checkout' type="button">Agregar
                        </button>
                    </div>
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <img src={aboutImage} alt={aboutTitle} />
                    </div>
                    
                </div>
            </div>
        </section>
    )
    
}

export default About4