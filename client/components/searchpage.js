import React, { useState, useRef }  from 'react'
import BookList from './BookList';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 

const myRef = useRef(null)


const searchStyle= {
    height: '85vh',
  
    backgroundSize: 'cover',
    backgroundPositionY: '-174px'
}
const myForm={
    width: '70%',
    margin: '160px auto'
}
const myInput={
    borderTopLeftRadius: '20px',
    borderRadius: '20px',
    borderBottomLeftRadius: '20px'
}
const myBtnRgt={
    width: '150px',
    padding: '10px',
    backgroundColor: '#ed145b',
    borderRadius: '20px',
    marginLeft: '20px',
    cursor: 'pointer'
} 