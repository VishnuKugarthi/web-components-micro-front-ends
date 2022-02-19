import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// import { Button } from 'carbon-components-react';

export default function MyButton() {
  return (
    <>
      <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      {/* <div>
        Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial.
        <Button>Button</Button>
      </div> */}
    </>
  );
}
