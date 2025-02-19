import type { FC } from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="absolute top-3 right-3">
      <div 
        className="w-9 h-9 rounded-full overflow-hidden"
        style={{ 
          boxShadow: '0 0 0 2px var(--tg-theme-button-color)'
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