import { Dispatch, useEffect } from 'react';
import { WebsocketService } from 'services';
import { Command, Sensor } from 'types/Sensor';
import { SensorsActionType, SensorsAction } from './useSensorsReducer';

interface ToggleSensorConnectionStateRequestData {
  id: Sensor['id'];
  command: Command;
}

const useSensorsConnection = (
  dispatch: Dispatch<SensorsAction>
): ((sensor: Sensor) => void) => {
  const updateSensors = (sensor: Sensor) =>
    dispatch({ type: SensorsActionType.UpdateSensors, payload: sensor });

  const toggleSensorConnectionState = (sensor: Sensor) => {
    WebsocketService.send<ToggleSensorConnectionStateRequestData>({
      id: sensor.id,
      command: sensor.connected ? Command.Disconnect : Command.Connect,
    });
  };

  useEffect(() => {
    WebsocketService.on<Sensor>(updateSensors);

    return () => WebsocketService.off(updateSensors);
  });

  return toggleSensorConnectionState;
};

export default useSensorsConnection;
