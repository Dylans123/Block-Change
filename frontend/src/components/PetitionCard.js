import React, { Component } from 'react';

class PetitionCard extends Component {
  render() {
    const { petition } = this.props;
    return (
      <Card variant="outlined">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Category: Health
          </Typography>
          <Typography variant="h5" component="h2">
            {petition.title}
          </Typography>
          <Typography color="textSecondary">
            To: The mayor
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