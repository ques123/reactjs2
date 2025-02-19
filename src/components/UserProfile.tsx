import type { FC } from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="flex items-center justify-end gap-2 p-2">
      <span className="text-[var(--tg-theme-hint-color)] text-sm">{username}</span>
      <div 
        className="w-8 h-8 rounded-full overflow-hidden"
        style={{ 
          border: '2px solid var(--tg-theme-button-color)',
          backgroundColor: 'var(--tg-theme-secondary-bg-color)'
        }}
      >
        <img 
          src={avatarUrl} 
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}; 