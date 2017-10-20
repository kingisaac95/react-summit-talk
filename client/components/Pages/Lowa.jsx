import React from 'react';

export const Lowa = () => {
  return (
    <div className="cb">
      <div className="row">
        <h1 className="searchTerm">Learn Once, Write Anywhere</h1>
        <p>
          We don't make assumptions about the rest of your technology stack,
          so you can develop new features in React without rewriting existing code. - reactjs.org
        </p>

        <p>React / React native example to display text on screen</p>
        <p>- React</p>
        <pre>
          {`
            import React, { Component } from 'react';
            
            class DisplayTextReact extends Component {
              render() {
                return (
                  <div>
                    <h1>
                      I like React on the web.
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                );
              }
            }
          `}
        </pre>
        <p>- React Native - Eg from https://facebook.github.io/react-native/</p>
        <pre>
          {`
            import React, { Component } from 'react';
            import { Text, View } from 'react-native';
            
            class DisplayTextReactNative extends Component {
              render() {
                return (
                  <View>
                    <Text>
                      I like React Native.
                    </Text>
                    <Text>
                      You just use native components like 'View' and 'Text',
                      instead of web components like 'div' and 'span'.
                    </Text>
                  </View>
                );
              }
            }
          `}
        </pre>
      </div>
    </div>
  );
};
