import React from 'react'
import { memo } from 'react'

export const Small = React.memo(({ value }) => {
    console.log('Ejecutando componente');
    return (
        <small> {value} </small>
    )
})
