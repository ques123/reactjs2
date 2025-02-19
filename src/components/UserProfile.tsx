import type { FC } from 'react';

interface UserProfileProps {
  username: string;
  avatarUrl: string;
}

export const UserProfile: FC<UserProfileProps> = ({ username, avatarUrl }) => {
  return (
    <div className="flex items-center justify-end gap-3 px-4">
      <span className="text-[var(--tg-theme-text-color)]">{username}</span>
      <img 
        src={avatarUrl} 
        alt="Profile"
        className="w-10 h-10 rounded-full object-cover"
        style={{ boxShadow: '0 0 0 2px var(--tg-theme-button-color)' }}
      />
    </div>
  );
}; 