import './App.css'
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {

  return (
    <>
      <Header />
      <Home />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' /> 
        <Route path='/contact' /> 
        <Route path='/calculate' /> 
      </Routes> */}
    </>
  )
}
