// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import VoiceInput from './lib/VoiceInput';

export function App() {
  return (
    <div>
      <VoiceInput onDataAvailable={() => { }} />
    </div>
  );
}

export default App;
