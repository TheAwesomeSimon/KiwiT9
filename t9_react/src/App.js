import React from 'react';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <TextField
          id="number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          size="medium"
          color="secondary"
        />
  );
}

export default App;
