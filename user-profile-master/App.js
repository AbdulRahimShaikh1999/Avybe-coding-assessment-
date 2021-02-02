/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

//container
import SignUpContainer from "./src/screens";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

//redux
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/reducers";

//redux store
const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SignUpContainer />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
