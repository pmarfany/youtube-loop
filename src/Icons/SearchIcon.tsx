import React from 'react';

interface SearchIconProps {
  color: string;
  size?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ color, size }) => (
  <svg viewBox="0 0 512 512" height={size} width={size}>
    <path d="M3.1,478.7L151.9,330c-28.2-34.8-45.2-79.1-45.2-127.3C106.7,90.9,197.6,0,309.3,0S512,90.9,512,202.7
          s-90.9,202.7-202.7,202.7c-48.2,0-92.5-17-127.3-45.2L33.3,508.9c-4.2,4.2-10.9,4.2-15.1,0L3.1,493.8C-1,489.6-1,482.9,3.1,478.7z
          M309.3,362.7c88.2,0,160-71.8,160-160s-71.8-160-160-160s-160,71.8-160,160S221.1,362.7,309.3,362.7z" fill={color}/>
  </svg>
);

SearchIcon.defaultProps = {
  size: '1rem',
};

export { SearchIcon };