import React from 'react'
import { ListOfGifs } from '../../components/ListOfGifs'

export const SearchResults = ({ params }) =>{
    console.log(params.id)
    return <ListOfGifs params={params} />
}