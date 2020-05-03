import React, { Component } from 'react';
import LocalOffer from '@material-ui/icons/LocalOffer'
import Person from '@material-ui/icons/Person'
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core'

class PetitionCard extends Component {
  render() {
    const { petition } = this.props;
    return (
      <Card variant="outlined">
        <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <Typography className="m-2" color="textSecondary" gutterBottom style={{ display: 'flex', alignITems: 'center' }}>
            <LocalOffer className="mr-1" style={{ color: '#B4E178' }} /><b>Health</b>
          </Typography>
        </div>
        <CardContent>
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
        <div style={{ borderTop: '1px solid rgba(0, 0, 0, 0.12)' }}>
          <div className="m-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button size="small">
              <Typography>
                Sign this petition
              </Typography>
            </Button>
            <Typography className="m-2" color="textSecondary" gutterBottom style={{ display: 'flex', alignITems: 'center' }}>
              <Person className="mr-1" style={{ color: '#B4E178' }} /><b>1 supporters</b>
            </Typography>
          </div>
        </div>
      </Card>
    )
  }
}

export default PetitionCard;