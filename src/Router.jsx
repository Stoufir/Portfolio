import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'

function Router () { return (
  <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
)}


export default Router;