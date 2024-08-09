"use client"
import React, { useEffect, useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
const [cards, setCards] = useState([])

const fetchData = async ()=>{
     let a = await fetch("https://jsonplaceholder.typicode.com/posts")
     let data = await  a.json()
     setCards(data)
     console.log(data);
     
}

useEffect(() => {
 fetchData()
}, [])


  return (
    <>
    <Header/>
  <div className='container'>
    {cards.map((card)=>{
      return <div key={card.id} className='card'>
      <h1>{card.title}</h1>
      <p>{card.body}</p>
      <span>By: UserId: {card.userId}</span>

      </div>
    })}
    

    </div>
  
    
    </>
  )
}

export default page