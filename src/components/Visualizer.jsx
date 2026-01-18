import { useProgress } from '../data/ProgressContext';
import { Database, Activity } from 'lucide-react';
import './Visualizer.css';

const Visualizer = () => {
  const { visualState } = useProgress();

  const variables = Object.entries(visualState).filter(([key]) => key !== '_system');

  return (
    <div className="visualizer-container">
      <div className="visualizer-header">
        <Activity size={18} color="var(--primary)" />
        <h3>Memória do Computador</h3>
      </div>
      
      <div className="variables-list">
        {variables.length > 0 ? (
          variables.map(([name, value]) => (
            <div key={name} className="variable-card">
              <div className="var-header">
                <span className="var-type">{typeof value}</span>
                <span className="var-name">{name}</span>
              </div>
              <div className="var-value">
                {JSON.stringify(value)}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-memory">
            <Database size={32} color="var(--text-muted)" />
            <p>A memória está vazia. Declare uma variável!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Visualizer;
