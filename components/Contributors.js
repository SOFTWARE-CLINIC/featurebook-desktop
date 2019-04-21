import React from 'react';
import Person from "./Person";

const Contributors = ({contributors}) => {
  return (
    <div className="featurebook-contributors">
      {contributors.map(contributor => (
        <Person key={contributor.id}
                {...contributor}
        />
      ))}
    </div>
  )
};

export default Contributors;
