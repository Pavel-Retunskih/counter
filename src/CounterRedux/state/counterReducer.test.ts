// beforeAll(() => {
//   const initialState = {
//     counter: 0,
//     startValue: 0,
//     endValue: 1,
//   };

import { counterReducer, increaseCounterAC, setEndValueAC, setStartValueAC } from "./counterReducer";

// });
test("counter should increase", () => {
  const initialState = {
    counter: 0,
    startValue: 0,
    endValue: 1,
  };

  const action = increaseCounterAC();
  const newState = counterReducer(initialState, action);
  expect(newState.counter).toBe(1);
});
test("counter start value should be correct", () => {
  const initialState = {
    counter: 0,
    startValue: 0,
    endValue: 1,
  };

  const action = setStartValueAC(3);
  const newState = counterReducer(initialState, action);
  expect(newState).toEqual({
    counter: 0,
    startValue: 3,
    endValue: 1,
  });
});
test("counter end value should be correct", () => {
  const initialState = {
    counter: 0,
    startValue: 0,
    endValue: 1,
  };

  const action = setEndValueAC(9);
  const newState = counterReducer(initialState, action);
  expect(newState).toEqual({
    counter: 0,
    startValue: 0,
    endValue: 9,
  });
});
