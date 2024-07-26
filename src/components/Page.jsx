import React from 'react'

const Page = ({selected,setshow}) => {
  return (
    <div className='body'>
         <div className='page'>
             <iframe width="560" height="315" src={selected.youtubetrailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             <h2 className='h2'>About Game</h2>
             
             <p>{selected.description}</p>
             
             <h2  className='h2'>Downloads Links</h2>
             <button className='btn'>For Pc</button>
             <button className='btn'>For Ps4</button>
             <button className='btn'>For Xbox</button>
             <button className='back' onClick={()=>setshow(false)}>go back</button>
         </div>
    </div>
   
  )
}

export default Page
