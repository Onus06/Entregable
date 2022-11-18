import * as contentful from 'contentful'

export const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

// export const client = contentful.createClient({
//     space: 'yki4d5f02kvk',
//     accessToken: 'V73sPf5KMHscOyJ-vPAlsyelQlxDDKHwPN7MTrcBG4g'
// })