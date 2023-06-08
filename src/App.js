import { Container } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Detail from './Pages/Detail/Detail';
import Favourite from './Pages/Favourite/Favourite';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  const location = useLocation()
  const isNotFoundPage = location.pathname === '*';

  return (
    <Container px='0' maxW='md' m='auto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favourite' element={<Favourite />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Navbar />
    </Container>
  );
}

export default App;
