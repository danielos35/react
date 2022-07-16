import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {

    const {data, isLoading, hasError} = useFetch('https://www.breakingbadapi.com/api/quotes/1'); 
    console.log({data, isLoading, hasError});
    return (
        <>
            <h1>
                Breaking bad
            </h1>
        </>
    )
}
