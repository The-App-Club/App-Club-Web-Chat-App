import { useState, useEffect } from 'react';
import classnames from 'classnames';
import { decideOrientation } from '@/plugins/shortHandDetectResize.js';
import { decideDeviceType } from '@/plugins/shortHanddetectDeviceType.js';

const Header = () => {
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
    return (
      <div className="header isSp">
        <div className="header-title isSp">CowBoy Bebop</div>
      </div>
    );
  } else {
    return (
      <div className="header isPc">
        <div className="header-title isPc">CowBoy Bebop</div>
      </div>
    );
  }
};
export { Header };
