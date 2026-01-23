import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MarkdownViewer from './components/MarkdownViewer';
import ErrorBoundary from './components/ErrorBoundary';
import { docs } from './data/docs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <ErrorBoundary>
            <Routes>
              {/* Main Documentation */}
              <Route path="/" element={<MarkdownViewer content={docs.home.content} />} />
              <Route path="/thesis" element={<MarkdownViewer content={docs.thesis.content} />} />
              <Route path="/observer" element={<MarkdownViewer content={docs.observer.content} />} />
              <Route path="/ember" element={<MarkdownViewer content={docs.ember.content} />} />
              <Route path="/pai-integration" element={<MarkdownViewer content={docs.paiIntegration.content} />} />
              <Route path="/architecture" element={<MarkdownViewer content={docs.architecture.content} />} />
              <Route path="/implementation" element={<MarkdownViewer content={docs.implementation.content} />} />

              {/* Ember Source Files */}
              <Route path="/ember-source" element={<MarkdownViewer content={docs.emberReadme.content} />} />
              <Route path="/ember-core" element={<MarkdownViewer content={docs.emberCore.content} />} />
              <Route path="/depth-framing" element={<MarkdownViewer content={docs.depthFraming.content} />} />
              <Route path="/ecsl-state" element={<MarkdownViewer content={docs.ecslState.content} />} />
              <Route path="/mcp-schema" element={<MarkdownViewer content={docs.mcpSchema.content} />} />
              <Route path="/ember-origin" element={<MarkdownViewer content={docs.emberOrigin.content} />} />
              <Route path="/subconscious" element={<MarkdownViewer content={docs.subconscious.content} />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    </Router>
  );
}

export default App;
