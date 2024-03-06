import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, About, Cultures, Blog } from './pages/All';
import { Header,Footer } from './components/All';
import SelectedTribeContent from './components/SelectedTribeContent';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cultures" element={<Cultures />} />
        <Route path="/blog" element={<Blog />} />
        {/* Add a route for displaying the selected tribe's content */}
        <Route path="/cultures/:tribe" element={<SelectedTribeContent />} />
        {/* You can also add a default "404 Not Found" route if needed */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
