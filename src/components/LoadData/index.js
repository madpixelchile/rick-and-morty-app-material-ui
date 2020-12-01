

import React, {useEffect} from 'react';



export const LoadData = (props) => {

    const {loadedItems, pageNumber} = props;

    const handleFetch = ()=>{
        
        console.log('https://rickandmortyapi.com/api/character/?page='+pageNumber+'');
        
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`).then((resolve)=>{
            return resolve.json();
        }).then((data)=>{
            console.log(data);
            const {results = 0, info = 0} = data;
            const allData = [results, info];
            loadedItems(...allData);
        }).catch((error)=>{
            return error;
        })
    }

    useEffect(() => {
        handleFetch();
    }, [pageNumber])

    return (
       <></>
    )
}
