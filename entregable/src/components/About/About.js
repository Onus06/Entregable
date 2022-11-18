import React, {useState, useEffect, useCallback } from 'react'
import {marked} from 'marked'
import { client } from '../../client'
import Loader from '../Loader/Loader'

const getHTMLData = (rawData) => {
    const htmlString = marked (rawData)
    return htmlString
}

const About = () => {
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)

    const cleanUpAbout = useCallback((rawData) => {
            const { sys, fields } = rawData
            const { id } = sys
            const aboutTitle =fields.title
            const aboutContent = getHTMLData (fields.content)
            const aboutDescription = fields.description
            const aboutImage = fields.image.fields.file.url
            let cleanAbout = { id, aboutTitle, aboutContent, aboutDescription, aboutImage }

            setAbout(cleanAbout)
        }, [])

    const getAbout = useCallback (async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry('6g0PN4Ns4YzyR97tapLzj0')
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

    const { aboutTitle, aboutContent, aboutDescription, aboutImage } = about

    return (
        <section className='about' id='about'>
            <div className='row'>
                <div className='column'>
                    <h2 className='tieleText'>{aboutTitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: aboutContent}} />
                    <div dangerouslySetInnerHTML={{ __html: aboutDescription}} />
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <img src={aboutImage} alt={aboutTitle} />
                    </div>
                </div>
                
                <div>
                </div>
            </div>
        </section>
    )
    
}

export default About