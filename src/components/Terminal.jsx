import { useEffect, useRef, useCallback } from 'react';
import { Terminal as XTerm } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import { useProgress } from '../data/ProgressContext';
import 'xterm/css/xterm.css';

const Terminal = ({ onCommand }) => {
  const terminalRef = useRef(null);
  const xtermRef = useRef(null);
  const inputBuffer = useRef('');
  const { updateVisualState } = useProgress();
  
  // Persistent execution context
  const context = useRef({});

  const executeCode = useCallback((code, term) => {
    if (!code.trim()) return;

    try {
      // Basic detection of declarations
      const isDecl = /^(let|var|const)\s+/.test(code.trim());
      const isAssignment = /^[a-zA-Z_$][0-9a-zA-Z_$]*\s*=/.test(code.trim());
      
      let result;
      if (isDecl) {
        // Handle declaration: let x = 10
        const match = code.match(/(?:let|var|const)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\s*=(.*)/);
        if (match) {
          const varName = match[1].trim();
          const expr = match[2].trim().replace(/;$/, '');
          
          // Evaluate the expression in the current context
          const keys = Object.keys(context.current);
          const values = Object.values(context.current);
          const evaluator = new Function(...keys, `return ${expr}`);
          const val = evaluator.apply(null, values);
          
          context.current[varName] = val;
          updateVisualState({ ...context.current });
          result = val;
        } else {
          // Just a declaration without assignment: let x;
          const nameMatch = code.match(/(?:let|var|const)\s+([a-zA-Z_$][0-9a-zA-Z_$]*)/);
          if (nameMatch) {
            context.current[nameMatch[1]] = undefined;
            updateVisualState({ ...context.current });
          }
        }
      } else {
        // Not a declaration, could be an expression or assignment
        const keys = Object.keys(context.current);
        const values = Object.values(context.current);
        
        // Try to evaluate as an expression first
        try {
          const evaluator = new Function(...keys, `return ${code}`);
          result = evaluator.apply(null, values);
          
          // If it was an assignment like x = 10, update context
          if (isAssignment) {
            const varName = code.split('=')[0].trim();
            context.current[varName] = result;
            updateVisualState({ ...context.current });
          }
        } catch {
          // If expression fails, try as a statement
          const runner = new Function(...keys, code);
          result = runner.apply(null, values);
        }
      }

      if (result !== undefined) {
        term.writeln(`\x1b[1;34m=> ${JSON.stringify(result)}\x1b[0m`);
      }
    } catch (e) {
      term.writeln(`\x1b[1;31mErro: ${e.message}\x1b[0m`);
    }
  }, [updateVisualState]);

  useEffect(() => {
    const term = new XTerm({
      cursorBlink: true,
      theme: {
        background: '#0a0c10',
        foreground: '#e3e6ed',
        cursor: '#58cc02',
        selection: 'rgba(88, 204, 2, 0.3)',
      },
      fontSize: 14,
      fontFamily: '"Fira Code", monospace',
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);
    term.open(terminalRef.current);
    fitAddon.fit();

    term.writeln('\x1b[1;32mCodeAcademy Renovador v1.0\x1b[0m');
    term.writeln('Digite seu código e veja a mágica acontecer!');
    term.write('\r\n$ ');

    term.onData(data => {
      const code = data.charCodeAt(0);
      if (code === 13) { // Enter
        term.write('\r\n');
        executeCode(inputBuffer.current, term);
        if (onCommand) onCommand(inputBuffer.current);
        inputBuffer.current = '';
        term.write('$ ');
      } else if (code === 127) { // Backspace
        if (inputBuffer.current.length > 0) {
          inputBuffer.current = inputBuffer.current.slice(0, -1);
          term.write('\b \b');
        }
      } else {
        inputBuffer.current += data;
        term.write(data);
      }
    });

    xtermRef.current = term;

    const handleResize = () => fitAddon.fit();
    window.addEventListener('resize', handleResize);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
      if (xtermRef.current) {
        xtermRef.current.dispose();
        xtermRef.current = null;
      }
    };
  }, [onCommand, executeCode]); // Add dependencies

  return (
    <div 
      ref={terminalRef} 
      style={{ width: '100%', height: '100%', padding: '10px' }} 
    />
  );
};

export default Terminal;
