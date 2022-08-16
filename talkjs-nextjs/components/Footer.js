import Link from 'next/link';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { decideOrientation } from '@/plugins/shortHandDetectResize.js';
import { decideDeviceType } from '@/plugins/shortHanddetectDeviceType.js';

const Footer = () => {
  const [isSp, setSpDeviceState] = useState(false);
  const [isPortrait, setDeviceOrientationState] = useState(false);

  function handleChangeDeviceType() {
    const decideDeviceTypeResult = decideDeviceType();
    switch (decideDeviceTypeResult) {
      case 'isPc':
        setSpDeviceState(false);
        break;

      case 'isTablet':
        setSpDeviceState(false);
        break;

      case 'isMobile':
        setSpDeviceState(true);
        break;

      default:
        break;
    }
  }

  function handleResize(e) {
    setDeviceOrientationState(decideOrientation());
    handleChangeDeviceType();
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react
    return function cleanUpListener() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  if (isSp) {
    return <div className="footer isSp">FOOTER</div>;
  } else {
    return <div className="footer">FOOTER</div>;
  }
};
export { Footer };
