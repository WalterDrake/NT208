import React from 'react'
import Navbar from '../Navbar'
import { Grid } from '@mui/material'
import Item from '../Footer/Item'

export default function KhoahocitemDetailLayout({children}) {
  return (
    <Grid  container spacing ={2} className="bg-blue-100">
      <Grid item xs={12}>
      <header>
        <Navbar />
      </header>
      </Grid>
      <Grid item xs={12}>
        <div className='mt-[7.5rem]'>{children}</div>
      </Grid>
    </Grid>
  )
}
