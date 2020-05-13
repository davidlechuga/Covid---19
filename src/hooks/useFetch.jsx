import {useEffect,useState} from "react"

const useFetch=(url,initialState)=>{
    const [data,setData] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)


    useEffect(()=>{
        setLoading(true)
        fetch(url)
            .then(response=>response.json())
            .then(data=>{
                setData(data)
                setLoading(false)
            })
            .catch(error=>{
                setLoading(false)
                setError(error)
            })
    },[url])


    return{data,loading,error}
}

export default useFetch;