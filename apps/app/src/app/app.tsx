// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import VoiceInput from './lib/VoiceInput';

export function App() {


  const client = new WebSocket('ws://localhost:8080');

  client.onopen = () => {
    console.log('WebSocket Client Connected');
  };

  client.onmessage = (message) => {
    console.log(message);
  };

  client.onerror = function () {
    console.log('Connection Error');
  };

  return (
    <div>
      <VoiceInput onDataAvailable={() => { }} />
    </div>
  );
}

export default App;
