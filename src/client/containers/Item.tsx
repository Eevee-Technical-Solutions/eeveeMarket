import React, { FC, useState, useEffect } from 'react';

// importing componenets from Material UI
import {
    Button,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    CardActions,
    Divider,
    Typography,
    Input,
    makeStyles,
  } from '@material-ui/core';
  
  interface Options {
    headers: {};
    body: string;
    method: string;
  }
  
  
  // styles for connect Component
  const useStyles = makeStyles({
    form: {
      display: "flex",
      alignSelf: 'start',
      margin: 30,
    },
  });



//instead of using props, just fetch here.
//bid increment function


 useEffect(() => {
    fetch('')
        .then((res) => res.json())
        .then(({users}) => {

        })
        .catch((err) => console.log(err));
})




export const Item = () => {

    const classes = useStyles()

    return (
    <Card className="main">
        <CardActionArea>
           <CardMedia className={classes.media}
           image=""
           title="Auction"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Name of Item
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description of our auction item
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Current Bid
            </Button>
            <Button size="small" color="primary">
                Bid
            </Button>
        </CardActions>
    </Card>
    );
}