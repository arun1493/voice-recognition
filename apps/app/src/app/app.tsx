// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import VoiceToTextConverter from './lib/VoiceToTextConverter';
export function App() {
  return (
    <div>
      <VoiceToTextConverter />
    </div>
  );
}

export default App;
