'use strict';

let rejectNextTime = false;

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },

  postBuild() {
    let shouldReject = rejectNextTime;
    rejectNextTime = !rejectNextTime;
    if (shouldReject) {
      return Promise.reject(new Error('crash in postbuild'));
    }
  },
};
