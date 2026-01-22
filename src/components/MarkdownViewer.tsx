import { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import './MarkdownViewer.css';

interface MarkdownViewerProps {
  content: string;
}

// Initialize mermaid with dark theme
mermaid.initialize({
  startOnLoad: true,
  theme: 'dark',
  themeVariables: {
    primaryColor: '#00ffff',
    primaryTextColor: '#e0e0e0',
    primaryBorderColor: '#00ffff',
    lineColor: '#ff00ff',
    secondaryColor: '#9d00ff',
    tertiaryColor: '#0088ff',
    background: '#13131a',
    mainBkg: '#13131a',
    secondBkg: '#1a1a25',
    textColor: '#e0e0e0',
    border1: '#00ffff',
    border2: '#ff00ff',
  },
});

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      // Find all mermaid code blocks
      const mermaidBlocks = contentRef.current.querySelectorAll('code.language-mermaid');

      mermaidBlocks.forEach((block, index) => {
        const parent = block.parentElement;
        if (parent && parent.tagName === 'PRE') {
          const mermaidCode = block.textContent || '';
          const mermaidDiv = document.createElement('div');
          mermaidDiv.className = 'mermaid';
          mermaidDiv.textContent = mermaidCode;
          mermaidDiv.id = `mermaid-${index}-${Date.now()}`;
          parent.replaceWith(mermaidDiv);
        }
      });

      // Render all mermaid diagrams
      mermaid.run({
        querySelector: '.mermaid',
      });
    }
  }, [content]);

  return (
    <div className="markdown-viewer">
      <div className="markdown-content" ref={contentRef}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
