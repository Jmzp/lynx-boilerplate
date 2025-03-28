import { useCallback, useEffect, useState } from '@lynx-js/react';

import './Home.css';
import arrow from '../../assets/arrow.png';
import lynxLogo from '../../assets/lynx-logo.png';
import reactLynxLogo from '../../assets/react-logo.png';
import { useNavigate } from 'react-router';

export default function Home() {
  const [alterLogo, setAlterLogo] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
    setTimeout(() => {
      nav('/details')
    }, 1000)
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
        <view className="Banner">
          <view className="Logo" bindtap={onTap}>
            {alterLogo ? (
              <image src={reactLynxLogo} className="Logo--react" />
            ) : (
              <image src={lynxLogo} className="Logo--lynx" />
            )}
          </view>
          <text className="Title">Lynx</text>
          <text className="Subtitle">Boilerplate</text>
        </view>
        <view className="Content">
          <image src={arrow} className="Arrow" />
          <text className="Description">Tap the logo and have fun!</text>
          <text className="Hint">
            Edit<text style={{ fontStyle: 'italic' }}>{' src/App.tsx '}</text>
            to see updates!
          </text>
        </view>
        <view style={{ flex: 1 }}></view>
      </view>
    </view>
  );
}
