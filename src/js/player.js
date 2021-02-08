import User from './user';
import Events from './events';
import HandleOption from './option';

class RPlayer {
  constructor(options) {
    this.options = HandleOption(options);
    this.events = Events();

  }

}

export default RPlayer;
