import UAParser from 'ua-parser-js';

function decideDeviceType() {
  const uaParser = new UAParser().getResult();
  if (uaParser.device.type) {
    uaParser.device.type = uaParser.device.type.replace(' ', '');
  }

  if (navigator.platform == 'MacIntel' && navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
    if (navigator.standalone !== undefined) {
      uaParser.device.type = 'tablet';
    } else {
      // macOS Safari
    }
  }

  if (uaParser.device.type == 'tablet') {
    return 'isTablet';
  } else if (uaParser.device.type == 'mobile') {
    return 'isMobile';
  } else {
    return 'isPc';
  }
}

export { decideDeviceType };
