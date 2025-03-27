import { useCallback, useEffect, useState } from '@lynx-js/react';

import './Details.css';
import arrow from '../../assets/arrow.png';
export default function Details() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, []);

  const onTap = useCallback(() => {
    'background only';
    setAlterLogo(!alterLogo);
  }, [alterLogo]);

  return (
    <view>
      <view className="Background" />
      <view className="App">
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
