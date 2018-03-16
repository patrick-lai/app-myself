import React from 'react';

export default () => {
  return   <div className="page padded" style={{ display: "flex", flexDirection: 'column'}}>
    <p>Please wait a bit for heroku to spin up. <i>Note - This has stopped working as my Watson.ai trial period expired</i></p>
    <iframe src="https://lululeague-assistant.herokuapp.com/"  style={{ width: '100%', flex: 1}} frameBorder={0} />
  </div>;
}
