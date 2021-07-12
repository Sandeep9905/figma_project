import React, { useState } from 'react';

export default function Main({ suggestions, makeNotification }) {
    const [search, setSearch] = useState('');
    const [savedSuggestions, setSavedData] = useState([]);

    // adding to saved suggestions from suggestions given
    const addToSuggestion = (newSuggestion) => {
        let arr = [...savedSuggestions];
        arr.push(newSuggestion);
        let removingDuplicates = [...new Set(arr)];
        setSavedData(removingDuplicates);
        setSearch('');
        makeNotification();
    }

    // adding to saved suggestions
    const addtoSavedSuggestions = () => {
        addToSuggestion(search)
    }
    //deleting from suggestions
    const deleteFromSuggestions = (item) => {
        let filteredSuggestions = savedSuggestions.filter(res => res !== item);
        setSavedData(filteredSuggestions)
        makeNotification();
    }
    return (
        <main>
            <div className='main-content'>
                <h5>Tags <span>(optional)</span></h5>
                <div className="saved-content">
                    {savedSuggestions && (
                        <ul>
                            {savedSuggestions.map((res, index) => (
                                <li key={index} className="save">{res}
                                    <svg onClick={deleteFromSuggestions.bind(this, res)} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.7188 3.78125L3.28125 12.2188" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M11.7188 12.2188L3.28125 3.78125" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <input type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="searchbox"
                    placeholder="Start Typing and we shall make Suggestions"
                    className="searchbox"
                />
                {search.length > 0 && (
                    <div className="add-data">
                        <svg onClick={addtoSavedSuggestions} width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7188 3.78125L3.28125 12.2188" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.7188 12.2188L3.28125 3.78125" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
                <div className="suggestion-box">
                    <ul>
                        {suggestions.filter((val) => {
                            if (search === '') {
                                return '';
                            } else if (val.toLowerCase().includes(search.toLowerCase())) {
                                return val;
                            }
                            return 0;
                        }).map((res, index) => {
                            return (
                                <li key={index} onClick={addToSuggestion.bind(this, res)}>{res}</li>
                            )
                        }
                        )}
                    </ul>
                </div>
            </div>
        </main>
    )
}


