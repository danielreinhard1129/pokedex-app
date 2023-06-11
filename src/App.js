import { Container } from '@chakra-ui/react';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import LoadingInitial from './Components/Loading/LoadingInitial';
import Navbar from './Components/Navbar/Navbar';
import db from './config/firebase';
import Detail from './Pages/Detail/Detail';
import Favourite from './Pages/Favourite/Favourite';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import { updateAction } from './reducers/favourite';




function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)

  const [allFavourite, setAllFavourite] = useState([])
  const getPokemons = async () => {
    const docRef = collection(db, "favourites")
    const docSnap = await getDocs(docRef)
    const results = docSnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setAllFavourite(results)
    dispatch(updateAction(results));
  }

  useEffect(() => {
    getPokemons()

    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, []);

  return (
    <Container px='0' maxW='md' m='auto'>
      {
        isLoading ?
          <LoadingInitial />
          :
          <>
            <Routes>
              <Route path='/' element={<Home getPokemons={getPokemons} allFavourite={allFavourite} />} />
              <Route path='/favourite' element={<Favourite getPokemons={getPokemons} allFavourite={allFavourite} />} />
              <Route path='/detail/:id' element={<Detail getPokemons={getPokemons} allFavourite={allFavourite} />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
            <Navbar />
          </>
      }
    </Container>
  );
}

export default App;
