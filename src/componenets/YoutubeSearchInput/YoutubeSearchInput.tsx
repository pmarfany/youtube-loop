import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from '../Button/Button';
import {SearchIcon} from '../../Icons/SearchIcon';
import './style.css';

interface SearchInputProps {
  value: string;
  onSubmit: (value: string) => void;
  className?: string;
}

const YoutubeSearchInput: React.FC<SearchInputProps> = ({ value, onSubmit, className }) => {
  const [inputValue, setInputValue] = useState(value);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const submitValue = () => onSubmit(inputValue);

  const onKeyDown = (e: KeyboardEvent) => {
    if ( e.key !== 'Enter' ) { return; }
    submitValue();
  };

  return (
    <div className={`input-wrapper flex-center ${className}`}>
      <input
        type="search"
        placeholder="Insert youtube videoId (?v=)"
        className="input-element"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Button
        className="search-button"
        onClick={submitValue}
        children="Search"
        icon={<SearchIcon color="white" />}
        iconPosition="after"
      />
    </div>
  );
};

YoutubeSearchInput.defaultProps = { className: '' };

export { YoutubeSearchInput };
