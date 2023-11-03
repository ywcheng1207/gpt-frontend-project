import * as React from 'react'
import Badge from '@mui/material/Badge'
import Stack from '@mui/material/Stack'

export default function ColorBadge ({ chatLogNumber }) {
  return (
    <Stack spacing={1} direction="row">
      <Badge
        badgeContent={chatLogNumber}
        style={{ color: 'rgba(199, 199, 199, 0.747)' }}
      ></Badge>
    </Stack>
  )
}
