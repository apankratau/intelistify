import { useReducer } from 'react';
import { Sensor } from 'types/Sensor';

interface SensorsState {
  sensors: Sensor[];
  sensorsViewData: Sensor[];
  showOnlyConnected: boolean;
}

export enum SensorsActionType {
  UpdateSensors = 'updateSensors',
  ToggleShowOnlyConnected = 'toggleShowOnlyConnected',
}

export type SensorsAction =
  | {
      type: SensorsActionType.ToggleShowOnlyConnected;
    }
  | {
      type: SensorsActionType.UpdateSensors;
      payload: Sensor;
    };

const sensorsInitialState: SensorsState = {
  sensors: [],
  sensorsViewData: [],
  showOnlyConnected: false,
};

const sensorsReducer = (state: SensorsState, action: SensorsAction) => {
  switch (action.type) {
    case SensorsActionType.ToggleShowOnlyConnected:
      const showOnlyConnected = !state.showOnlyConnected;

      return {
        ...state,
        showOnlyConnected: showOnlyConnected,
        sensorsViewData: state.sensors.filter((sensor) =>
          showOnlyConnected ? sensor.connected : true
        ),
      };

    case SensorsActionType.UpdateSensors:
      const isExistingSensor = state.sensors.some(
        (previousSensor) => previousSensor.id === action.payload.id
      );

      const sensors = isExistingSensor
        ? state.sensors.map((previousSensor) =>
            previousSensor.id === action.payload.id
              ? { ...action.payload }
              : previousSensor
          )
        : [...state.sensors, action.payload];

      return {
        ...state,
        sensors,
        sensorsViewData: sensors.filter((sensor) =>
          state.showOnlyConnected ? sensor.connected : true
        ),
      };

    default:
      return state;
  }
};

const useSensorsReducer = (): [
  Omit<SensorsState, 'sensorsViewData'>,
  React.Dispatch<SensorsAction>
] => {
  const [state, dispatch] = useReducer(sensorsReducer, sensorsInitialState);

  return [
    { sensors: state.sensorsViewData, showOnlyConnected: state.showOnlyConnected },
    dispatch,
  ];
};

export default useSensorsReducer;
