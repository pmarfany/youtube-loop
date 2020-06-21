import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';

interface SearchInputProps {
  value: string;
  onSubmit: (value: string) => void;
}

const YoutubeSearchInput: React.FC<SearchInputProps> = ({ value, onSubmit }) => {
  const [inputValue, setInputValue] = useState(value);

  // Could remove this if we used a 'key' outside
  useEffect(() => setInputValue(value), [value]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.currentTarget.value);

  const submitValue = () => onSubmit(inputValue);

  const onKeyDown = (e: KeyboardEvent) => {
    if ( e.key !== 'Enter' ) { return; }
    submitValue();
  };

  return (
    <div className="input-wrapper input-search">
      <input
        type="search"
        placeholder="Insert youtube videoId (?v=)"
        className="input-element"
        value={inputValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button className="search-button" onClick={submitValue}>Search</button>
    </div>
  );
};

export { YoutubeSearchInput };
