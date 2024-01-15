import { FC } from 'react';
import { Grid } from '@radix-ui/themes';
import { Sensor } from 'types/Sensor';
import SensorsListItem from 'components/SensorsListItem';

interface SensorsListProps {
  sensors: Sensor[];
  onToggleSensorStateButtonClick: (sensor: Sensor) => () => void;
}

const SensorsList: FC<SensorsListProps> = ({
  sensors,
  onToggleSensorStateButtonClick,
}) => {
  return (
    <Grid
      gap='3'
      align='center'
      justify='center'
      columns='4'
      width='max-content'
      mx='auto'
    >
      {sensors.map((sensor) => (
        <SensorsListItem
          key={sensor.id}
          sensor={sensor}
          onToggleSensorStateButtonClick={onToggleSensorStateButtonClick(sensor)}
        />
      ))}
    </Grid>
  );
};

export default SensorsList;
