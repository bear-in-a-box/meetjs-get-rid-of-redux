import React, { useEffect, useState } from 'react';
import './Dashboard.scss';

import { setReduxTriggersActive } from 'data/variant/redux/triggers';
import { setRxjsTriggersActive } from 'data/variant/rxjs/triggers';

import { changeMessagesInterval } from 'data/connection';

export const Dashboard: React.FC = () => {
  const [msgInterval, setMsgInterval] = useState<number>(2500);

  useEffect(() => {
    changeMessagesInterval(msgInterval);
  }, [msgInterval]);

  return (
    <div className="Dashboard">
      <input
        type="range"
        min="10"
        max="5000"
        value={msgInterval}
        step="10"
        onChange={e => setMsgInterval(e.target.valueAsNumber)}
      />
      <span>Sending messages every {msgInterval} ms</span>
      <span className="Toggles">
        <label>
          <input
            type="checkbox"
            onChange={e => setReduxTriggersActive(e.target.checked)}
          />
          Redux
        </label>
        <label>
          <input
            type="checkbox"
            onChange={e => setRxjsTriggersActive(e.target.checked)}
          />
          RxJS
        </label>
      </span>
    </div>
  );
};
