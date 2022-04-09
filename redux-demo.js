const redux = require("redux");

//the reducer function
const counterReducer = (oldState = { counter: 0 }, dispatchAction) => {
  return {
    counter: oldState.counter + 1,
  };
};

const store = redux.createStore(counterReducer); //create a redux store

//the subscriber
const counterSubscriber = () => {
  const latestState = store.getState(); //gives latest state snapshot
  console.log(latestState);
};
//subscribing the subscriber to the store
//redux will execute the function when the data changes
store.subscribe(counterSubscriber);

//dispatch() is used to dispatch a redux action (a Js Object that defines the operation)
store.dispatch({ type: "increment" });
