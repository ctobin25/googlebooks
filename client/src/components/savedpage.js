import React, { useState, useEffect }   from 'react';
import axios from 'axios';

function SavedPage() {
    const messageStyle = {
        position: 'sticky',
        top: '0',
        right: '0'
    }
    const [ showBookList, setshowBookList ]= useState([]);

    useEffect( function(){
        loadBookList();
    }, [] );
}

async function loadBookList(){ 
        
    const apiBooks = await fetch(`/api/booklist`).then( result=>result.json() );
    setshowBookList( apiBooks );
    console.log( 'apiBooks', apiBooks);
}

async function deleteBook(id){
    console.log('delete something? : ', id)
    const apiBooks = await fetch(`/api/deleteBook/${id}`).then( result=>result.json() );
    loadBookList();


}
return ( 
    <div  class="album py-5 bg-light">
        
        <div class="container">
            <div class="row">
                    { showBookList ? showBookList.map( books =>
                    <div class="col-md-4 text-center">
                        <div class="card mb-4 box-shadow">
                            <div class="bookImg"> 
                                {books.thumbnail && books.thumbnail ? <img src={books.thumbnail}  /> : '[no image]' }
                            </div>
                            <div class="bookDesc2"> 
                                <h5 class="bookTitle">{books.title}</h5>
                                <div class="d-flex justify-content-center">
                                    <a class="myBtn2" href={books.link}>preview</a>
                                    <div class="myBtn2" onClick={function(){ deleteBook(books._id)}}> delete </div>
                                </div>
                            </div>

                        </div>
                    </div>
                ) : 'No Books Saved'}

        </div>
        </div>
    </div>
)
                    

export default SavedPage