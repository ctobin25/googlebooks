
import React, { useState}  from 'react'
import { Link, useLocation } from "react-router-dom";

function BookList(props) {
    const location = useLocation();
    const messageStyle = {
        position: 'sticky',
        top: '0',
        left: '0'
    }
}

const [ alertMessage, setAlertMessage ] = useState( { type: "", message: ""} );
async function saveBook( books){
    
    const bookInfo = {
        bookId: books.id,
        title: books.volumeInfo.title,
        imageThumb: books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.thumbnail ? books.volumeInfo.imageLinks.thumbnail: 'https://cdn1.vectorstock.com/i/1000x1000/21/85/white-blank-book-cover-isolated-template-empty-vector-25362185.jpg' ,
        link: books.volumeInfo.previewLink
    }
}
const apiResult = await fetch('/api/saveBook', 
{   method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookInfo)
}).then( result=>result.json() );

if( apiResult.message ){
    setAlertMessage( { type: 'success', message: apiResult.message } );
    setTimeout( function(){ setAlertMessage( {} ); }, 3000 );
} else {
    setAlertMessage( { type: 'danger', message: apiResult.error } );
    setTimeout( function(){ setAlertMessage( {} ); }, 2500 );
}





export default BookList;