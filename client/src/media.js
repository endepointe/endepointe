export function getAudio() {

  const constraints = {
    'video': false,
    'audio': true
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      console.log('Have media stream', stream);
    })
    .catch(error => {
      console.log(`error with media device: ${error}`);
    });
}

export function getVidio() {

  const constraints = {
    'video': true,
    'audio': false
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      console.log('Have media stream', stream);
    })
    .catch(error => {
      console.log(`error with media device: ${error}`);
    });
}

export function getAudioVideo() {

  const constraints = {
    'video': true,
    'audio': true
  }

  navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      console.log('Have media stream', stream);
    })
    .catch(error => {
      console.log(`error with media device: ${error}`);
    });
}

export function getConnectedDevices(type, callback) {
  navigator.mediaDevices.enumerateDevices()
    .then(devices => {
      const filtered = devices.filter(device => device.kind === type);
      callback();
    });
}