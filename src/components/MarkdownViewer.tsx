import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import mermaid from 'mermaid';
import './MarkdownViewer.css';

interface MarkdownViewerProps {
  content: string;
}

// Map wiki-style links to routes
const wikiLinkMap: Record<string, string> = {
  // Main docs
  '00-Index': '/',
  '01-AW-Thesis': '/thesis',
  '02-Observer-Framework': '/observer',
  '03-Ember-Framework': '/ember',
  '04-PAI-Integration': '/pai-integration',
  '05-Multi-Agent-Architecture': '/architecture',
  '06-Implementation-Plan': '/implementation',
  // Ember Source - with path prefix
  'Ember-Source/README': '/ember-source',
  'Ember-Source/Ember_Core': '/ember-core',
  'Ember-Source/Ember_Depth_Framing': '/depth-framing',
  'Ember-Source/Ember_ECSL_State': '/ecsl-state',
  'Ember-Source/Ember_MCP_Schema': '/mcp-schema',
  'Ember-Source/Ember_Origin': '/ember-origin',
  'Ember-Source/Ember_Subconscious': '/subconscious',
  // Ember Source - without path prefix
  'Ember_Core': '/ember-core',
  'Ember_Depth_Framing': '/depth-framing',
  'Ember_ECSL_State': '/ecsl-state',
  'Ember_MCP_Schema': '/mcp-schema',
  'Ember_Origin': '/ember-origin',
  'Ember_Subconscious': '/subconscious',
};

// Convert wiki-style links [[Page]] or [[Page|Label]] or [[Page#Section|Label]] to routes
function convertWikiLinks(content: string): string {
  // First handle escaped pipe syntax: [[Page\\|Label]]
  let processed = content.replace(/\[\[([^\]|\\]+)\\+\|([^\]]+)\]\]/g, (_match, page, label) => {
    const pageName = page.split('#')[0].trim();
    const route = wikiLinkMap[pageName];
    const displayText = label.trim();

    if (route) {
      return `[${displayText}](${route})`;
    }
    return `**${displayText}**`;
  });

  // Then handle standard wiki links: [[Page]] or [[Page|Label]] or [[Page#Section|Label]]
  processed = processed.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_match, page, label) => {
    // Handle section links like [[Page#Section|Label]]
    const pageName = page.split('#')[0].trim();
    const route = wikiLinkMap[pageName];
    const displayText = label || pageName.split('/').pop()?.replace(/_/g, ' ').replace(/-/g, ' ') || pageName;

    if (route) {
      return `[${displayText}](${route})`;
    }
    // Keep as bold text if no mapping found
    return `**${displayText}**`;
  });

  return processed;
}

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
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

// Mermaid component that renders diagrams safely
function MermaidDiagram({ code }: { code: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;

    const render = async () => {
      try {
        const result = await mermaid.render(id, code);
        if (!cancelled) {
          setSvg(result.svg);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) {
          console.warn('Mermaid render error:', err);
          setError(err instanceof Error ? err.message : 'Failed to render diagram');
        }
      }
    };

    render();

    return () => {
      cancelled = true;
    };
  }, [code]);

  if (error) {
    return (
      <div className="mermaid-fallback">
        <pre className="mermaid-error">
          <code>{code}</code>
        </pre>
      </div>
    );
  }

  if (!svg) {
    return <div className="mermaid-loading">Loading diagram...</div>;
  }

  return (
    <div
      ref={containerRef}
      className="mermaid-rendered"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

// Custom code component for ReactMarkdown
function CodeBlock({ className, children, ...props }: React.ComponentPropsWithoutRef<'code'> & { children?: React.ReactNode }) {
  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : '';
  const codeString = String(children).replace(/\n$/, '');

  if (language === 'mermaid') {
    return <MermaidDiagram code={codeString} />;
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
}

// Custom link component to handle internal links with React Router
function CustomLink({ href, children, ...props }: React.ComponentPropsWithoutRef<'a'> & { children?: React.ReactNode }) {
  // Check if it's an internal link (starts with /)
  if (href && href.startsWith('/')) {
    return (
      <Link to={href} className="internal-link" {...props}>
        {children}
      </Link>
    );
  }

  // External link
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="external-link" {...props}>
      {children}
    </a>
  );
}

export default function MarkdownViewer({ content }: MarkdownViewerProps) {
  if (!content) {
    return (
      <div className="markdown-viewer">
        <div className="markdown-error">
          <h2>No content available</h2>
          <p>The requested document content is empty or undefined.</p>
        </div>
      </div>
    );
  }

  // Convert wiki-style links before rendering
  const processedContent = convertWikiLinks(content);

  return (
    <div className="markdown-viewer">
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code: CodeBlock,
            a: CustomLink,
          }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
