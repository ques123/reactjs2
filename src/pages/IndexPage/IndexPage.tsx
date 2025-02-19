import { Section, Cell, Image, List } from '@telegram-apps/telegram-ui';
import type { FC } from 'react';
import WebApp from '@twa-dev/sdk';
import { Link } from '@/components/Link/Link.tsx';
import { Page } from '@/components/Page.tsx';
import { UserProfile } from '@/components/UserProfile';
import tonSvg from './ton.svg';

export const IndexPage: FC = () => {
  const user = WebApp.initDataUnsafe.user;
  const username = user?.username || user?.first_name || 'User';
  const avatarUrl = user?.photo_url || 'https://via.placeholder.com/40';

  return (
    <Page back={false}>
      <div className="mb-4">
        <UserProfile username={username} avatarUrl={avatarUrl} />
      </div>
      <List>
        <Section
          header="Features"
          footer="learn more yo"
        >
          <Link to="/ton-connect">
            <Cell
              before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
              subtitle="Connect your TON wallet"
            >
              TON Connect
            </Cell>
          </Link>
        </Section>
        <Section
          header="Application Launch Data"
          footer="These pages help developer to learn more about current launch information"
        >
          <Link to="/init-data">
            <Cell subtitle="User data, chat information, technical data">Init Data</Cell>
          </Link>
          <Link to="/launch-params">
            <Cell subtitle="Platform identifier, Mini Apps version, etc.">Launch Parameters</Cell>
          </Link>
          <Link to="/theme-params">
            <Cell subtitle="Telegram application palette information">Theme Parameters</Cell>
          </Link>
        </Section>
      </List>
    </Page>
  );
};
