import React from 'react';

export const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./img/logo.png" alt="Logo" className="logo__image"/>
      </div>
      <h1 className="heading-primary">Weather app</h1>
    </header>
  )
}
