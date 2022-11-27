import axios from 'axios'

export const getImages = (labels) => {
    const promise = axios.post('http://127.0.0.1:5000/imagesName',{
        params: {
            labels: labels
        }
    })

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    // return it
    return dataPromise
}