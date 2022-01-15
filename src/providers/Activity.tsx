import { useEffect, useCallback, createContext, useState } from "react";
type ActivityProviderProps = {
  children: any;
};

type ActivityState = {
  currentValue: string | undefined;
  userHistory: Array<string>;
};

interface ActivityContext {
  state: ActivityState;
  generateCode: (value: string) => void;
  saveToHistory: (value: string) => void;
}

//TODO: add service for storing qrs in localstorage
//TODO: add ability to delete item from the list

export const ActivityStore = createContext<ActivityContext>({
  state: {
    currentValue: undefined,
    userHistory: [],
  },
  generateCode: (value: string) => {},
  saveToHistory: (value: string) => {},
});

const { Provider } = ActivityStore;

export const ActivityProvider = ({ children }: ActivityProviderProps): JSX.Element => {
  const [currentValue, setCurrentValue] = useState<string | undefined>(undefined);
  const [userHistory, setUserHistory] = useState<Array<string>>([]);

  const generateCode = useCallback((value: string) => {
    setCurrentValue(value);
  }, []);
  const saveToHistory = useCallback(
    (value: string) => {
      if (userHistory.indexOf(value) === -1) setUserHistory([value, ...userHistory]);
    },
    [userHistory]
  );

  useEffect(() => {
    //TODO: Load user history
  }, []);

  return (
    <Provider
      value={{
        state: {
          currentValue,
          userHistory,
        },
        generateCode,
        saveToHistory,
      }}
    >
      {children}
    </Provider>
  );
};

export default ActivityProvider;
