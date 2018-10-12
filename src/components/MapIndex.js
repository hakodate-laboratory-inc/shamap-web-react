import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const styles = {
  root: {
    flexGrow: 1,
    margin: "16px",
  },
  card: {
    height: "200px",
  },
};

class MapIndex extends Component {
  componentDidMount() {
    const { getMaps } = this.props;
    getMaps();
  }

  render() {
    const { maps } = this.props;
    return (
      <div className="MapIndex" style={styles.root}>
        <Grid container spacing={16}>
          { maps.map(map => (
            <Grid item key={ map.id } xs={12} sm={6}>
              <Card style={styles.card}>
                <CardContent>
                  <Typography variant="headline" component="h2">
                    <Link to={ `/maps/${map.slug}` }>{ map.title }</Link>
                  </Typography>
                  <Typography component="p">{ map.description }</Typography>
                </CardContent>
              </Card>
            </Grid>
          )) }
        </Grid>
      </div>
    );
  }
}

export default MapIndex
