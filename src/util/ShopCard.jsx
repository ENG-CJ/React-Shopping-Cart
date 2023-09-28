import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

export default function ShopCard({item,getData}) {
  return (
    <Box sx={{my: 2}}>
    <Paper elevation={4} className='shoping-card-container' sx={{borderRadius: 6, width: 290,background: "white"}}>
       <img style={{width: "100%"}} src={`../../images/${item.image}`}/>
       <Typography className='title'>{item.itemName}</Typography>
       <Typography>Size: {item.size}</Typography>
       <Typography sx={{mb: 2}}>USD: <strong>{item.USD}</strong></Typography>

       <Button variant='contained' color='success' onClick={()=>getData(item)}>Add to Cart</Button>
    </Paper>
    </Box>
  )
}
