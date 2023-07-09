import React from 'react';
import { Box, CircularProgress, Stack } from '@material-ui/core';

const Loader = () =>  (
  <Box minHeight="95vh">
    <div direction='row' justifyContent='center' alignItems='center' height='80vh' >
      <CircularProgress />
    </div>
  </Box>
);

export default Loader;
