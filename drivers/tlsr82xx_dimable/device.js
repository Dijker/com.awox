'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class Tlsr82xxDimable extends ZigBeeLightDevice {

  get energyMap() {
    return {
      'TLSR82xx': {
        approximation: {
          usageOff: 0.5,
          usageOn: 5.5,
        },
      },
    };
  }

}

module.exports = Tlsr82xxDimable;
