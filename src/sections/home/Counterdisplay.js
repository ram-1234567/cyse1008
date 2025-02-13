import React from 'react'; // Import React to use JSX

// This is the custom component that will display the click count
export function CounterDisplay({ clickCount }) {
  return (
    <div style={{
      fontSize: '1.5rem',
      color: 'green',
      marginTop: '20px',
    }}>
      You clicked {clickCount} {clickCount === 1 ? 'time' : 'times'}.
    </div>
  );
}
