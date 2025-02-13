import { useState } from 'react'; // Importing useState hook
import Button from '@mui/material/Button'; // Importing Button component from Material-UI
import Box from '@mui/material/Box'; // Importing Box component from Material-UI
import { CounterDisplay } from './Counterdisplay'; // Importing the custom CounterDisplay component

export function HomeHeroCYSE1008() {
  // Declare a state variable to track the number of button clicks
  const [clickCount, setClickCount] = useState(0);

  // Define the onClick handler to update the count
  const handleClick = () => {
    setClickCount(clickCount + 1); // Increment the click count
  };

  return (
    <>
      {/* Box component with title */}
      <Box sx={{
        backgroundColor: 'lightblue', // Light blue background color
        padding: '40px',              // Padding around the content
        textAlign: 'center',          // Centered text alignment
        borderRadius: '12px',         // Rounded corners
        fontSize: '2rem',             // Larger text size
        fontWeight: 'bold',           // Bold text
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow effect
        marginTop: '20px',            // Margin at the top
      }} >
        Run with me
      </Box>

      {/* Button component with onClick functionality */}
      <Button
        variant="contained"   // Button style set to "contained" for a solid background
        color="primary"       // Applying the primary color theme
        sx={{
          marginTop: '20px',   // Adds space between the Box and Button
          padding: '10px 20px', // Adds padding inside the button for a better size
          fontSize: '1.2rem',  // Increases font size
          borderRadius: '8px', // Rounds the corners of the button
        }}
        onClick={handleClick}  // Assign handleClick function to onClick event
      >
        Start Your Journey
      </Button>

      {/* Pass the clickCount state to the CounterDisplay component */}
      <CounterDisplay clickCount={clickCount} />
    </>
  );
}
