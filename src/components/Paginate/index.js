

import React from 'react';

import Pagination from '@material-ui/lab/Pagination';

import {makeStyles} from '@material-ui/core';

const myStyles = makeStyles({
    custonPaginateStyles: {
        margin: '0 auto',
        position: 'relative',
        display: 'table'
    }
});

export const Paginate = (props) => {

    const classes = myStyles();

    const {returnedPageNumber, count} = props;

    function handleChangePage(event, value){
        returnedPageNumber(value);
        console.log(value);
    }

    return (
        <>
            <Pagination className={classes.custonPaginateStyles} count={count} onChange={handleChangePage}/>
        </>
    )
}
