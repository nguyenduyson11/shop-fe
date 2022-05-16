import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to="/">Home</Link> |{' '}
          <Link to="/about">About</Link>
        </nav>
      </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
  );
}
