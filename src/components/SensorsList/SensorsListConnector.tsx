import useSensorsConnection from 'hooks/useSensorsConnection';
import { Sensor } from 'types/Sensor';
import useSensorsReducer, { SensorsActionType } from 'hooks/useSensorsReducer';
import SensorsList from './SensorsList';
import SensorsListFilters from 'components/SensorsListFilters';

const SensorsListConnector = () => {
  const [{ sensors, showOnlyConnected }, dispatch] = useSensorsReducer();
  const toggleSensorConnectionState = useSensorsConnection(dispatch);

  const handleToggleSensorStateButtonClick = (sensor: Sensor) => () => {
    toggleSensorConnectionState(sensor);
  };

  const handleShowOnlyConnectedCheckboxChange = () => {
    dispatch({
      type: SensorsActionType.ToggleShowOnlyConnected,
    });
  };

  return (
    <>
      <SensorsListFilters
        showOnlyConnected={showOnlyConnected}
        onShowOnlyConnectedCheckboxChange={handleShowOnlyConnectedCheckboxChange}
      />

      <SensorsList
        sensors={sensors}
        onToggleSensorStateButtonClick={handleToggleSensorStateButtonClick}
      />
    </>
  );
};

export default SensorsListConnector;
