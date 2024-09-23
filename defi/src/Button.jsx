import React from 'react';
import './button.css';

function Button({ className, link, name }) {
  return (
    <div>
      <a className={className} href={`/${link}`}>{name}</a>
    </div>
  );
}

export default Button;
