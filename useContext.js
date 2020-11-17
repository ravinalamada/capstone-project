import React, { useState, useEffect } from 'react';

const Context = React.createContext();
const endpoint = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

function UseContextProvider(props) {

   const [allPhotos, setAllPhotos ] = useState([]);

   async function getPhotos(url) {
     const res = await fetch(url);
     const photos = await res.json();
     setAllPhotos(photos);
   }

   useEffect(() => {
     getPhotos(endpoint)
   }, []);

   useEffect(() => {
     if(allPhotos) {
       console.log(allPhotos);
     }
   }, [allPhotos])

  return (
    <Context.Provider value={{allPhotos}}>
      {props.children}
    </Context.Provider>
  )
}

export {UseContextProvider, Context};
