import React  from 'react'

function Header({setPrice}) {
    return (
    <div className='header'>
        <div className="movie-container">
            <label>Pick a movie:</label>
            <select aria-label="movie" id="movie" onChange={e => setPrice(e.target.value)} >
                <option value="10">Avengers: Endgame ($10)</option>
                <option value="12">Joker ($12)</option>
                <option value="8">Toy Story 4 ($8)</option>
                <option value="9">The Lion King ($9)</option>
            </select>
        </div>
        <ul className="showcase">
            <li>
                <div className="seat"></div>
                <small>N/A</small>
            </li>
            <li>
                <div className="seat selected"></div>
                <small>Selected</small>
            </li>
            <li>
                <div className="seat occupied"></div>
                <small>Occupied</small>
            </li>
        </ul>
    </div>
  )
}

export default Header
