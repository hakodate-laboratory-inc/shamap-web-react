import ActionCable from "actioncable";
import { wsServer } from "./constants"

export default ActionCable.createConsumer(wsServer);
