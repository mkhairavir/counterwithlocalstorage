import React, {useState} from 'react'

const ListProduct = () => {
    const [listItem,setListItem] = useState()

  const allStorage = () => {
    let allItems= [],
        allItemsParsed=[],
        a,
        keys = Object.keys(localStorage),
        i = keys.length;
        console.log("keeys",keys)

        for (let c=0; c<i; c++ ) {
          allItems.push(localStorage.getItem(keys[c]))
          allItemsParsed.push(JSON.parse(allItems[c])) 
        }
        console.log("items parsed", allItemsParsed)
        a = 10
        setListItem(allItemsParsed)
        console.log(listItem)
      }
      //pUYENNGGG ITU PAKE MAPS KENAPA ENGGA BISAAAAAAAAA
      // kayaknya gara" listItem masih kosong, karena blum ditrigger allStorage. tapi tetep aja gimana akalinyaaaaaaaaa
    return(
      <div>
      <h1>UwU</h1>
      <button onClick={allStorage}>tekan untuk tampilan</button>

      
      
      {/* {listItem.map((item, index) => {
        if (index < 20) {
          return (
            <li key={index}>
              {index + 1}. {item.Product}
            </li>
          );
        }
      })} */}

      </div>
    )
}

export default ListProduct;