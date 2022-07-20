import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHook = () => {
    const {
        counter,
        incrementar,
    } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`); 
    console.log({data, isLoading, hasError});
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>
                Breaking bad
            </h1>

            {
                isLoading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mt-1'>{quote}</p>
                            <footer className='blockquote-footer'>{author}</footer>
                        </blockquote>
                    )
            }


            <button
                className='btn btn-primary'
                onClick={() => {
                    incrementar()
                }
                }>
                Next Quote
            </button>

        </>
    )
}
