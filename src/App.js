import Header from './Header';
import Rows from './Rows';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [isSelected,setIsSelected] = useState([]);
  const [price,setPrice] = useState("10")


  const handleClick = (id) => {
    if (id !== 12 && id !== 13 && id !== 23 && id !== 24 && id !== 36 && id !== 37 && id !== 46 && id !== 47 && id !== 48 ) {
      if (isSelected.includes(id) ) {
        setIsSelected(isSelected.filter(item=> item !== id))
      } else{
        setIsSelected([...isSelected , id])
      }
    } 
  }

  let count = isSelected.length;
  
  return (
    <div className="App">
      <Header
        price = {price}
        setPrice = {setPrice}
      />
      <Rows 
        handleClick = {handleClick}
        isSelected = {isSelected}
      />
      <Footer
        count = {count}
        price = {price}
      />
    </div>
  );
}

export default App;
