import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk-react';
import WebApp from '@twa-dev/sdk';

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

  const App = () => {
    const user = WebApp.initDataUnsafe.user;
    const username = user?.username || user?.first_name || 'User';
    const avatarUrl = user?.photo_url || 'https://via.placeholder.com/40';

    return (
      <StrictMode>
        <UserProfile username={username} avatarUrl={avatarUrl} />
        <Root/>
      </StrictMode>
    );
  };

  root.render(<App />);
} catch (e) {
  root.render(<EnvUnsupported/>);
}
