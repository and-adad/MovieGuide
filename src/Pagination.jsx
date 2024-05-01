import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={5}
        hidePrevButton
        shape="rounded"
        size="large"
        renderItem={(item) => (
            <PaginationItem
              slots={{ next: ArrowForwardIcon }}
              {...item}
            />
          )} />
    </Stack>
  );
}
