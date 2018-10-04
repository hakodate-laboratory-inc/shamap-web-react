import ActionCable from "actioncable";

export default ActionCable.createConsumer("ws://localhost:3000/cable");
