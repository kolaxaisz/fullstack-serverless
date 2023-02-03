import './App.css';
import React from "react";
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>
      <Authenticator>
        {({ signOut, user }) => (
          <div className="App">
            <p>
              Hey {user.username}, welcome to my channel, with auth!
            </p>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default withAuthenticator(App);
