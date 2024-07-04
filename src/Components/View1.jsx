import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const View1 = () => {
  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-th.jpeg"
        title="Title"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Yeh Jawaani Hai Deewani
        </Typography>
        <Typography variant="body2" color="text.secondary">
        On a trekking trip, an introvert falls for a charming ex-classmate, 
        whose thirst for adventure drives them apart. 
        Years later, their paths cross again.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Trailer</Button>
        <Button size="small">Watch Now</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default View1