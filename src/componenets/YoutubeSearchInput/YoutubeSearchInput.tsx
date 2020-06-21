import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {isValidLink} from '../../utils/youtube';

interface SearchInputProps {
  value: string;
  onSubmit: (value: string) => void;
}

const YoutubeSearchInput: React.FC<SearchInputProps> = ({ value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value);
  const isValid = isValidLink(inputValue);

  // Could remove this if we used a 'key' outside
  useEffect(() => setInputValue(value), [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const submitValue = () => {
    if ( !isValid ) { return; }
    onSubmit(inputValue);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if ( e.key !== 'Enter' ) { return; }
    submitValue();
  };

  return (
    <div className={`input-wrapper input-search ${!isValid ? 'input-error' : ''}`}>
      <input type="search" className="input-element" value={inputValue} onChange={onChange} onKeyDown={onKeyDown} />
      <button className="search-button" onClick={submitValue}>Search</button>
    </div>
  );
};

export { YoutubeSearchInput };
