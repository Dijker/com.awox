'use strict';

const { ZigBeeLightDevice } = require('homey-zigbeedriver');

class Tlsr82xxTunable extends ZigBeeLightDevice {

  get energyMap() {
    return {
      'TLSR82xx': {
        approximation: {
          usageOff: 0.5,
          usageOn: 8.6,
        },
      },
      'ESMLFzm_w6_TW': {
        approximation: {
          usageOff: 0.5,
          usageOn: 8.6,
        },
      },
      'EGLO_ZM_TW': {
        approximation: {
          usageOff: 0.5,
          usageOn: 8.6,
        },
      },
    };
  }

}

module.exports = Tlsr82xxTunable;
