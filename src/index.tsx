import ReactDOM from 'react-dom/client';
import { StrictMode, useState } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';

import { Root } from '@/components/Root.tsx';
import { EnvUnsupported } from '@/components/EnvUnsupported.tsx';
import { init } from '@/init.ts';
import { UserProfile } from './components/UserProfile';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

// Mock the environment in case, we are outside Telegram.
import './mockEnv.ts';

const root = ReactDOM.createRoot(document.getElementById('root')!);

try {
  // Configure all application dependencies.
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV);

  const [username, setUsername] = useState('John Doe'); // Replace with actual user data
  const [avatarUrl, setAvatarUrl] = useState('https://via.placeholder.com/40'); // Replace with actual user avatar

  root.render(
    <StrictMode>
      <UserProfile username={username} avatarUrl={avatarUrl} />
      <Root/>
    </StrictMode>,
  );
} catch (e) {
  root.render(<EnvUnsupported/>);
}
