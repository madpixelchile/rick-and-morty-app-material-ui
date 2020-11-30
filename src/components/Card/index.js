import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CustomCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const {
    children,
    cardName,
    cardSpecie,
    cardImg,
    allEpisodes,
    status,
    origin,
    location
  } = props;

  // const episodes = allInfo[0].episode;

  function formatFirstChar(){
    const cardModName = cardName.split(' ');
    const cardFirstName = cardModName[0];
    const cardFirstNameToString = cardFirstName.toString();
    const cardFirstLetter = cardFirstNameToString.split('');
    
    return (
      <>
        { cardFirstLetter[0] }
      </>
    )
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {formatFirstChar()}
          </Avatar>
        }
        action={''}
        title={cardName}
        subheader={cardSpecie}
      />
      <CardMedia
        className={classes.media}
        image={cardImg}
        title={`${cardName} cover image`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Status: ${status}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Origin: ${origin}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`Location: ${location}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Episodes:</Typography>
          {
            allEpisodes ? allEpisodes.map((obj,i)=>{
              return(
                <ListItem button key={i}>
                  <ListItemText primary={obj} />
                </ListItem>
              )
            }) : ''
          }

        </CardContent>
      </Collapse>
    </Card>
  );
}
