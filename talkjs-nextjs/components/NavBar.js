import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import classnames from 'classnames';
import { decideOrientation } from '@/plugins/shortHandDetectResize.js';
import { decideDeviceType } from '@/plugins/shortHanddetectDeviceType.js';

const NavBar = () => {
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

  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  function mobileMenu(e) {
    const hamburgerDom = hamburgerRef.current;
    const navMenuDom = navMenuRef.current;
    hamburgerDom.classList.toggle('active');
    navMenuDom.classList.toggle('active');
  }

  function closeMenu(e) {
    const hamburgerDom = hamburgerRef.current;
    const navMenuDom = navMenuRef.current;
    hamburgerDom.classList.remove('active');
    navMenuDom.classList.remove('active');
  }

  useEffect(() => {
    // console.log('navMenuRef', navMenuRef);
    // console.log('hamburgerRef', hamburgerRef);
  }, []);

  if (isSp) {
    return (
      <div className="navbar isSp">
        <nav>
          <ul className="nav-menu" ref={navMenuRef}>
            <li className="nav-item">
              <Link href={`/`}>
                <a
                  className="nav-link"
                  onClick={(e) => {
                    closeMenu(e);
                  }}
                >
                  welcome
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/mypage`}>
                <a
                  className="nav-link"
                  onClick={(e) => {
                    closeMenu(e);
                  }}
                >
                  mypage
                </a>
              </Link>
            </li>
          </ul>
          <div
            className="hamburger"
            ref={hamburgerRef}
            onClick={(e) => {
              mobileMenu(e);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="navbar">
        <nav>
          <ul className="nav-menu" ref={navMenuRef}>
            <li className="nav-item">
              <Link href={`/`}>
                <a
                  className="nav-link"
                  onClick={(e) => {
                    closeMenu(e);
                  }}
                >
                  welcome
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={`/mypage`}>
                <a
                  className="nav-link"
                  onClick={(e) => {
                    closeMenu(e);
                  }}
                >
                  mypage
                </a>
              </Link>
            </li>
          </ul>
          <div
            className="hamburger"
            ref={hamburgerRef}
            onClick={(e) => {
              mobileMenu(e);
            }}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </div>
    );
  }
};
export { NavBar };
