
import React from 'react'
import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03_examples';

export const Layout = () => {
    const {
        counter,
        incrementar,
    } = useCounter(1)
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    console.log({ data, isLoading, hasError });
    const { author, quote } = !!data && data[0];

    return (
        <>
            <h1>
                Breaking bad
            </h1>

            {
                isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />
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
