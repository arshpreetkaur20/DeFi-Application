import React from 'react';
import './button.css';

function Button({ className, link, name }) {
  return (
    <div className={className}>
      <a  href={`/${link}`}>{name}</a>
    </div>
  );
}

export default Button;
