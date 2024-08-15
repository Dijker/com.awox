'use strict';

const Homey = require('homey');

class MyApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyApp has been initialized');
    this.homey.notifications.createNotification({
      excerpt : 'AwoX App Stops! Migrate to Eglo App! \nPlease Read: https://community.homey.app/t/63043/23'
    });
  }
}

module.exports = MyApp;
