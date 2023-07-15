import { Box, Button, Grid, Paper, Stack, TextField, styled } from '@mui/material'
import { useEffect, useState, useRef } from 'react'
import './App.css'
import Cardbr from './Cardbr';

function App() {
  const [cardHolder, setCardHolder] = useState([]);
  const [url, setUrl] = useState();
  const [content, setContent] = useState();

  var contentSpace = useRef(null);
  var urlSpace = useRef(null);


  const appendCard = () => {
    setCardHolder(cardHolder => [...cardHolder,
    <Grid item xs={4} sx={{ background: 'transparent' }}>
      <Cardbr key={url} content={content} URL={url} />
    </Grid>])

    setContent('')
    setUrl('')

  }


  return (
    <>
      <Box sx={{ flexDirection: 'column', display: 'flex', alignItems: 'center', minHeight: '100vh', maxWidth: '100vW', background: 'linear-gradient(135deg,#40128B,#DD58D6)' }}>
        <Paper elevation={10} sx={{ padding: '3vh', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5vh', background: '#FFE79B', width: '75%', height: '20%' }} >
          <TextField value={content} onChange={e => {
            setContent(e.target.value)
          }} color='secondary' label='Card Data' sx={{ width: '70%', marginRight: '3vh', marginLeft: '3vh' }}></TextField>

          <TextField value={url} onChange={e => {
            setUrl(e.target.value)
          }} color='secondary' label='Image URL' sx={{ width: '70%', marginRight: '3vh', marginLeft: '0vh' }}></TextField>
          <Button onClick={appendCard} variant='contained' color='secondary'>Add</Button>
        </Paper>
        <Grid container spacing={2} sx={{ marginTop: '5vh', width: '75%' }}>
          {cardHolder}
        </Grid>
      </Box>

    </>
  )
}

export default App

// sx={{ padding: '3vh', display: 'flex', justifyContent: 'top', alignItems: 'top', marginTop: '5vh', width: '75%' }}