type IncreaseCounterACType = ReturnType<typeof increaseCounterAC>;
type SetStartValueACType = ReturnType<typeof setStartValueAC>;
type SetEndValueACType = ReturnType<typeof setEndValueAC>;

type CounterReducerActionsType = IncreaseCounterACType | SetStartValueACType | SetEndValueACType;

const CounterState = {
  counter: 0,
  startValue: 0,
  endValue: 1,
};
export type CounterStateType = {
  counter: number;
  startValue: number;
  endValue: number;
};

export const counterReducer = (state: CounterStateType, action: CounterReducerActionsType): CounterStateType => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    case "SET_START_VALUE": {
      return {
        ...state,
        startValue: (state.counter = action.payload.startValue),
      };
    }
    case "SET_END_VALUE": {
      return {
        ...state,
        endValue: (state.counter = action.payload.endValue),
      };
    }
  }
};

export const increaseCounterAC = () => {
  return {
    type: "INCREMENT",
  } as const;
};

export const setStartValueAC = (startValue: number) => {
  return {
    type: "SET_START_VALUE",
    payload: {
      startValue,
    },
  } as const;
};

export const setEndValueAC = (endValue: number) => {
  return {
    type: "SET_END_VALUE",
    payload: {
      endValue,
    },
  } as const;
};
