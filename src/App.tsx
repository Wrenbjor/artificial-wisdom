import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MarkdownViewer from './components/MarkdownViewer';
import { docs } from './data/docs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MarkdownViewer content={docs.home.content} />} />
            <Route path="/thesis" element={<MarkdownViewer content={docs.thesis.content} />} />
            <Route path="/observer" element={<MarkdownViewer content={docs.observer.content} />} />
            <Route path="/ember" element={<MarkdownViewer content={docs.ember.content} />} />
            <Route path="/pai-integration" element={<MarkdownViewer content={docs.paiIntegration.content} />} />
            <Route path="/architecture" element={<MarkdownViewer content={docs.architecture.content} />} />
            <Route path="/implementation" element={<MarkdownViewer content={docs.implementation.content} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
