import React,{} from 'react'
    
function Row() {
    const seats = [10,11,12,13,14,15]
  return (
    <div className='row'>
        {
            [...Array(8)].map((_,index)=>(
                <div 
                    className='seat'
                    key={index} 
                    onClick = {()=>console.log(seats[index]*index)}
                >
                    <div></div>
                </div>
            ))
        }
    </div>
  )
}

export default Row
