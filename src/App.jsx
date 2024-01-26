import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addpage from './page/Addpage';

function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/addpage' element={<Addpage />} />
        </Routes>
      </div>
      {/* <Home /> */}
    </Router>
  )
}

export default App
