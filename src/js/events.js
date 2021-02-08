class Events {
  constructor() {
    this.events = {};

    this.playerEvents = [
      'play',
      'playing',
      'pause',
      'progress',
      'ratechange',
      'ended',
      'error',
    ];

    this.videoEvents = [
      'destory',
      'resize',
      'fullscreen',
      'fullscreen-cancel',
    ];

  }

  on(name, callback) {
    if(typeof callback === 'function' && this.type(name)) {
      if(!this.events[nam]) {
        this.events[name] = [];
      }
      this.events[name].push(callback);
    }
  }

  trigger(name, info) {
    if(this.events[name] && this.events[name].length) {
      for (let i = 0; i < this.events[name].length; i++) {
        this.events[name][i](info);
      }
    }
  }

  type(name) {
    if(this.playerEvents.indexOf(name) !== -1) {
      return 'player';
    }

    if(this.videoEvents.indexOf(name) !== -1) {
      return 'video';
    }
  }
}
