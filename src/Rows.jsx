import React from 'react'
// import Row from './Row'

function Rows({handleClick,isSelected}) {
    let seatsArray = [
        1,2,3,4,5,6,7,8,
        9,10,11,12,13,14,15,16,
        17,18,19,20,21,22,23,24,
        25,26,27,28,29,30,31,32,
        33,34,35,36,37,38,39,40,
        41,42,43,45,46,47,48,49,
    ]

  return (
    <div className='container'>
        <div className="screen"></div>
        <div className="row">
            {
                seatsArray.map(i => (
                    <div 
                        className = { 
                            i === 12 || i === 13 || i === 23 || i === 24 || i === 36 || i === 37 || i === 47 || i === 46 || i === 48
                            ? " seat occupied" :
                            isSelected.includes(i) ? "seat selected" : "seat"} 
                        key={i}
                        onClick = {()=>handleClick(i)}
                    ></div>
                ))
            }
        </div>
    </div>
  )
}

export default Rows
