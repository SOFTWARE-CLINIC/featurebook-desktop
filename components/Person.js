import React from 'react';

const Person = (({firstName, lastName, email}) => {
  return (
    <span>
      <a href={"mailto:" + email}>{firstName} {lastName}</a>
    </span>
  );
});

export default Person;
