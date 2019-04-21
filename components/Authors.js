import React from 'react';
import Person from "./Person";

const Authors = ({authors}) => {
  return (
    <div className="featurebook-authors">
      {authors.map(author => (
        <Person key={author.id}
                {...author}
        />
      ))}
    </div>
  )
};

export default Authors;
