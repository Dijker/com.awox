'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class Tlsr82xxDimmable extends ZigBeeLightDevice {

  get energyMap() {
    return {
      'TLSR82xx': {
        approximation: {
          usageOff: 0.5,
          usageOn: 5.5,
        },
      },
      'ESMLFzm_w6_Dimm': {
              approximation: {
                usageOff: 0.5,
                usageOn: 5.5,
              },
            },
    };
  }

}

module.exports = Tlsr82xxDimmable;
