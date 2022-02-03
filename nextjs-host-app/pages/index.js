import React from 'react';
import FlutterAuthenticatorComponent from './flutter-authenticator-component.js';
export default function IndexPage() {

  var postMessageToElement = (id, message) => {
    var el = document.getElementById(id);
    console.log(el);
    el.contentWindow.postMessage(message)
  };
  
  return (
    <div>
      <h1>
        Flutter Authenticator Demo
      </h1>
      <p>Flutter Authenticator demo running in a next js app.</p>
      <p>The button below will send an event from the next js app to the flutter authenticator. The flutter authenticator will listen for this event and toggle dark mode when it is received.</p>
      <div style={{paddingBottom: "16px"}}>
        <button onClick={() => postMessageToElement('flutter-authenticator-1', 'toggle-dark-mode')}>toggle dark mode</button>
      </div>
      <FlutterAuthenticatorComponent height={"600px"} id={"flutter-authenticator-1"}/>
    </div>
  )
}
