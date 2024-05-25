import React from 'react';

function Button({ label }) {
  // Define the styles as a JavaScript object
  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  // Define a hover style
  const buttonHoverStyle = {
    backgroundColor: 'darkblue',
  };

  // Create a state to manage hover effect (optional)
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      style={isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
}

export default Button;
