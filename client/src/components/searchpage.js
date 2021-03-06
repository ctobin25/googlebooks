import React, { useState, useRef } from 'react'
// import BookList from './booklist';
import API from "../utils/API"
function SearchPage(props) {

// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

// const myRef = useRef(null)


const searchStyle = {
    height: '85vh',
    backgroundSize: 'cover',
    backgroundPositionY: '-174px'
}
const myForm = {
    width: '70%',
    margin: '160px auto'
}
const myInput = {
    borderTopLeftRadius: '20px',
    borderRadius: '20px',
    borderBottomLeftRadius: '20px'
}
const myBtnRgt = {
    width: '150px',
    padding: '10px',
    backgroundColor: '#ed145b',
    borderRadius: '20px',
    marginLeft: '20px',
    cursor: 'pointer'
}

const [searchInput, setSearchInput] = useState("");
const [bookList, setBookList] = useState([]);
// const [showList, setShowList] = useState([]);



function handleInputChange(e) {
    const newInput = e.target.value;
    setSearchInput(newInput);
}

async function setResultBooks() {
 
    const bookResult = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`).then(result => result.json());

    setBookList(bookResult.items);
 
    // scrollToRef(myRef);

}

function saveBook(book) {
    console.log(book)
    API.saveBook({
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        synopsis: book.volumeInfo.description,
        imageLink: book.volumeInfo.imageLinks.smallThumbnail,
        bookInfo: book.volumeInfo.infoLink
      }).then(() => {
          alert('book saved')
      }).catch(err => {
          alert('unable to save book')
      })
}
  
return (
    <div id='something'>
        <div class="jumbotron jumbotron-fluid hero" style={searchStyle}>
            <div class="searchBox container">
                <div class="input-group mb-3 text-center" style={myForm}>

                    <input onChange={handleInputChange} value={searchInput} type="text" class="form-control text-center" style={myInput} placeholder="search book" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div class="myBtnRgt" onClick={function(){ setResultBooks()}}>Search Books</div>
                </div>
            </div>
        </div>
        {/* <BookList bookList={bookList} myRef={myRef} /> */}

        {/*  */}



{bookList.map(book => {
return (
    <div className="card" style={{width: '200'}}>
    <img src={book.volumeInfo.imageLinks.smallThumbnail} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{book.volumeInfo.title}</h5>
      <h6 className="card-title">{book.volumeInfo.authors[0]}</h6>
      <p className="card-text">{book.volumeInfo.description}</p>
      <a href={book.volumeInfo.infoLink} target="_blank" className="btn btn-primary">View Book</a>
      <button className="btn btn-primary"onClick = {() => saveBook(book)}>Save Book</button>
    </div>
  </div>
)

})}


    </div>

)

}




export default SearchPage;