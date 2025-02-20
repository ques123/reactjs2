import { FC, useEffect, useState } from 'react';
import { List, Section, Cell, Title, Spinner } from '@telegram-apps/telegram-ui';
import { Page } from '@/components/Page.tsx';
import { userActivityService } from '@/services/userActivity';

interface UserActivity {
  username: string;
  firstAccess: string;
  userId: number;
}

export const UserActivityPage: FC = () => {
  const [users, setUsers] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUserActivity = async () => {
      try {
        setLoading(true);
        const data = await userActivityService.getAllUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError('Failed to load user activity data');
        console.error('Error loading user activity:', err);
      } finally {
        setLoading(false);
      }
    };

    loadUserActivity();
  }, []);

  if (loading) {
    return (
      <Page>
        <div className="flex justify-center items-center h-full">
          <Spinner size="m" />
        </div>
      </Page>
    );
  }

  if (error) {
    return (
      <Page>
        <List>
          <Section>
            <Cell multiline className="text-red-500">
              {error}
            </Cell>
          </Section>
        </List>
      </Page>
    );
  }

  return (
    <Page>
      <List>
        <Section header="User Activity">
          <Title level="2" style={{ padding: '16px 24px' }}>
            Users who have opened the app
          </Title>
          {users.length === 0 ? (
            <Cell multiline>No user activity recorded yet</Cell>
          ) : (
            users.map((user) => (
              <Cell
                key={user.userId}
                multiline
                subtitle={`First access: ${new Date(user.firstAccess).toLocaleString()}`}
              >
                {user.username}
              </Cell>
            ))
          )}
        </Section>
      </List>
    </Page>
  );
}; 