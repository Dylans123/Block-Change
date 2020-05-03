import React, { Component } from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

class PetitionCard extends Component {
  render() {
    const { petition } = this.props;
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            <b>Health</b>
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Recipient: The mayor
          </Typography>
          <Typography variant="h5" component="h2">
            {petition.title}
          </Typography>
          <Typography variant="body2" component="p">
            {petition.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
  }
}

export default PetitionCard;