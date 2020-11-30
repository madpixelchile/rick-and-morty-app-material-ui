

import React from 'react';
import CustomCard from '../Card';
import {LoadData} from '../LoadData';

import {Grid, Box, makeStyles} from '@material-ui/core';

import {Paginate} from '../Paginate';

const myStyles = makeStyles({

    customContainer:{
        maxWidth: '1050px',
        margin: '0 auto',
        position: 'realative'
    }

});

export const CardList = () => {

    const classes = myStyles();

    const [loadedInfo, setLoadedInfo] = React.useState([]);
    const [actualPageNumber, setActualPageNumber] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(0);

    const handleChangePageNumber = (actualPage)=>{
        setActualPageNumber(actualPage);
    }

    const handleLoadedData = (results, info)=>{
        setLoadedInfo(results);
        setTotalPages(info.pages);
        //console.log(info.pages);
        //console.log('Esto es el obj info: ',info);
    }
    
    return (
        <div>
            <span>{actualPageNumber}</span>

            <Paginate returnedPageNumber={handleChangePageNumber} count={totalPages}></Paginate>

            <LoadData pageNumber={actualPageNumber} loadedItems={handleLoadedData}></LoadData>

            <Grid container spacing={0} className={classes.customContainer}>

                {
                    loadedInfo.length > 0 ? loadedInfo.map((obj,i)=>{
                        return(
                            <Grid item sm={6} xs={12} key={i}>
                                <Box p={2}>
                                    <CustomCard
                                        cardName={obj.name}
                                        cardSpecie={obj.species}
                                        cardImg={obj.image}
                                        itemKey={i}
                                        allEpisodes={obj.episode}
                                        status={obj.status}
                                        origin={obj.origin.name}
                                        location={obj.location.name}
                                    >
                                    </CustomCard>
                                </Box>
                            </Grid>
                        )
                    }) : <span>Loading data</span>
                }

            </Grid>
            
        </div>
    )
}
