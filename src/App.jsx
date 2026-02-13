
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import ContentAbout from './pages/about'
import MainLayout from './layout/MainLayout'



function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<ContentAbout/>}/>
      </Routes>
    </MainLayout>
  );
}

export default App
