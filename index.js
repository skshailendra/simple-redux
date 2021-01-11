const redux = require("redux");
const createStore = redux.createStore;
const INITIAL_STATE = {
  username: "",
  age: "",
  email: "",
};

/* 
   Here single reducer function we work as root reducer
   To create a store we need a root Reducer function upon which store 
   can be created.
   For simplicity we are using only on reducer function,
*/
const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      const { username } = action.payload;
      // Always make sure about the immutability
      return {
        ...state,
        username,
      };
    case "UPDATE_AGE":
      const { age } = action.payload;
      // Always make sure about the immutability
      return {
        ...state,
        age,
      };
    default:
      return state;
  }
};

// Create a store with Root reducer
const store = createStore(rootReducer);

/*
  Subscription to the all dispatch event, this will be triggered whenever 
  we dispatch something.
*/
store.subscribe(() => {
  console.log(store.getState());
});

// DispatchAction : it is used to update the store
store.dispatch({ type: "" });
store.dispatch({ type: "UPDATE_AGE", payload: { age: 23 } });
store.dispatch({ type: "UPDATE_NAME", payload: { username: "Shailendra" } });

/*
    Reducer function always expecting the type as first argument based
    on which it will decide an action.
    payload can be optional.
*/
