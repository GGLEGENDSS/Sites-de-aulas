import { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import DOMPurify from 'isomorphic-dompurify';
import './SafeMarkdown.css';

/**
 * Safe Markdown Renderer Component
 * Sanitizes markdown content to prevent XSS attacks
 */
const SafeMarkdown = ({ content, className = '' }) => {
  const [error, setError] = useState(null);

  const sanitizeMarkdown = (markdown) => {
    try {
      // Configure DOMPurify to allow only safe tags
      const config = {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'ul', 'ol', 'li'],
        ALLOWED_ATTR: ['class'],
        KEEP_CONTENT: true,
      };

      // Sanitize the HTML
      const clean = DOMPurify.sanitize(markdown, config);
      return clean;
    } catch (err) {
      setError('Erro ao processar conteúdo');
      return '';
    }
  };

  const sanitizedContent = sanitizeMarkdown(content);

  if (error) {
    return (
      <div className="markdown-error">
        <AlertCircle size={20} color="var(--error)" />
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div 
      className={`safe-markdown ${className}`}
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    />
  );
};

export default SafeMarkdown;
