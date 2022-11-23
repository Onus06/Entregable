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
            const aboutTitle = fields.title
            const aboutContent = getHTMLData (fields.content)
            //const aboutDescription = getHTMLData (fields.description)
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
                <h1>{aboutTitle}</h1>
                <br />
                    <div dangerouslySetInnerHTML={{ __html: aboutContent}} /> 
                        <h3>{aboutDescription}</h3>
                    <div class="d-grid gap-2">
                    <p></p>
                    <div className='container' style={{marginTop:"50px"}}>
                    <h2 className='titleText' >Buscar Productos</h2 >
                            <div className='justify-content-center'>
                            <div className=''>
                                <div className='col-lg-8'>
                                    <hr/>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <label htmlForm="firstName" className="form-label">Nombre</label>
                                            <input type="text" className="form-control" id="addres" placeholder="Ej: Ibuprofeno" value={''}/>
                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor="lastName" className="form-label">Referencia</label>
                                            <input type="text" className="form-control" id="addres" placeholder="Ej: 0000123879" value={''}/>
                                        </div>        
                                    </div>     
                                    <br />                        
                                </div>       
                                </div>
                            </div>
                        </div>
                    <p></p>
                    <button class="btn btn-primary" type="button">Buscar</button>
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

export default About