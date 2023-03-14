import React from 'react'

function Footer({count,price}) {
  return (
    <div>
        <p className="text">
            You have selected 
            <span className="count">{count}</span> 
            seats for a price of $
            <span className="total">{count * +price}</span
            >
        </p>
    </div>
  )
}

export default Footer
