import React, {useState, useEffect, useCallback } from 'react'
import {marked} from 'marked'
import { client } from '../../client'
import Loader from '../Loader/Loader'
import About5 from './About5'

const getHTMLData = (rawData) => {
    const htmlString = marked (rawData)
    return htmlString
}

const Descuentos = () => {
    const [about, setAbout] = useState({})
    const [isAboutLoading, setIsAboutLoading] = useState(false)

    const cleanUpAbout = useCallback((rawData) => {
            const { sys, fields } = rawData
            const { id } = sys
            const aboutTitle =fields.title
            const aboutContent = getHTMLData (fields.content)
            //const aboutDescription = getHTMLData (fields.content)
            const aboutDescription = fields.description
            const aboutImage = fields.image.fields.file.url
            let cleanAbout = { id, aboutTitle, aboutContent, aboutImage }

            setAbout(cleanAbout)
        }, [])

    const getAbout = useCallback (async () => {
        setIsAboutLoading(true)
        try {
            const response = await client.getEntry('720utaM8acVT8aBWqwycxr')
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
                <h2 className='titleText'> {aboutTitle}</h2>
                    
                    <About5 />
                    <div dangerouslySetInnerHTML={{ __html: aboutContent}} /> 
                    <h3>{aboutDescription}</h3>
                    
                    <div class="d-grid gap-2">
                    <p></p>
                    <p></p>
                    </div>
                </div>
                <div className='column'>
                    <div className='imgWrap'>
                        <About5 />
                    </div>
                    
                </div>
            </div>
        </section>
    )
    
}

export default Descuentos