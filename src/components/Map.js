import React, { Component } from "react";
import L from "leaflet";
import { Map as OSM, TileLayer, Marker, Popup } from "react-leaflet";
import {
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  withMobileDialog,
} from "@material-ui/core";
import { LocationOn } from "@material-ui/icons";
import moment from "moment";
import "moment/locale/ja";
import cable from "../config/cable"
import { theme } from "../config/ui";
import PostForm from "../containers/PostForm";
import { apiServer } from "../config/constants";

const styles = {
  button: {
    position: "absolute",
    zIndex: 1000,
    bottom: theme.spacing.unit,
    left: "calc(50% - 28px)",
    margin: theme.spacing.unit,
  },
};

const Transition = props => (
  <Slide direction="up" {...props} />
);

const PinIcon = (src) => new L.Icon({
  iconUrl: src ? `${apiServer}${src.mini}` : "https://leafletjs.com/examples/custom-icons/leaf-red.png",
})

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formOpen: false,
    };
    this.handleOpenForm = this.handleOpenForm.bind(this);
    this.handleCloseForm = this.handleCloseForm.bind(this);
  }

  componentDidMount() {
    const { match, fetchMap, addPin } = this.props;
    const { map_slug } = match.params;
    fetchMap(map_slug);

    this.subscription = cable.subscriptions.create({ channel: "MapChannel", room: map_slug }, {
      received(pindata) {
        addPin(pindata.new_pin);
      },
    });
  }

  componentWillMount() {
    this.subscription && cable.subscriptions.remove(this.subscription)
  }

  componentWillUnmount() {
    this.props.unsetMap();
  }

  handleOpenForm() {
    this.setState({ formOpen: true });
  }

  handleCloseForm() {
    this.setState({ formOpen: false });
  }

  render () {
    const { match, map, fullScreen, user, deletePin } = this.props;
    const { map_slug } = match.params;
    return (
      <div>
        { map.id ?
          <div>
            <Button variant="fab" color="primary" onClick={this.handleOpenForm} style={styles.button}>
              <LocationOn />
            </Button>
            <Dialog
              fullScreen={fullScreen}
              open={this.state.formOpen}
              close={this.handleClose}
              aria-labelledby="form-dialog-title"
              TransitionComponent={Transition}
            >
              <DialogTitle id="form-dialog-title">ピンを刺す</DialogTitle>
              <DialogContent>
                <PostForm onDialogClose={this.handleCloseForm} />
              </DialogContent>
            </Dialog>
            <OSM center={[41.814262, 140.757193]} zoom={11} zoomControl={false} className="OSM">
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyrght&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              { map.pins.length !== 0 ? map.pins.map(pin => (
                <Marker key={pin.id} position={pin.latlng} icon={PinIcon(pin.image_url)}>
                  <Popup>
                    <Card className="pinCard" style={{ backgroundImage: pin.image_url ? `url(${apiServer}${pin.image_url.mini})` : null }}>
                      <div className="card">
                        <p>{ pin.context.text }</p>
                        <p>
                          <span className="date">
                            { moment(pin.created_at).format("YYYY/M/D H:m") }
                          </span>
                          <span>{ pin.user.name }</span>
                        </p>
                      </div>
                      { pin.user.id === user.id ?
                        <div className="delete" onClick={() => deletePin(map_slug, pin.id)}>[削除]</div>
                      : null }
                    </Card>
                  </Popup>
                </Marker>
              )) : null }
            </OSM>
          </div>
        : <p>Map {map_slug} is not found :(</p> }
      </div>
    );
  }
}

export default withMobileDialog()(Map);
