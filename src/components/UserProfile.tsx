import type { FC } from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="absolute top-2 right-2">
      <div 
        className="w-10 h-10 rounded-full overflow-hidden bg-[var(--tg-theme-secondary-bg-color)]"
        style={{ 
          boxShadow: '0 0 0 1.5px var(--tg-theme-button-color)'
        }}
      >
        <img 
          src={avatarUrl} 
          alt={username}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}; 