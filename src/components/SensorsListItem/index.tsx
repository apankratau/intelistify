import { FC } from 'react';
import { Flex, Card, Text, Button, Badge, Heading } from '@radix-ui/themes';
import { Sensor } from 'types/Sensor';
import './sensorsListItem.css';

interface SensorsListItemProps {
  sensor: Sensor;
  onToggleSensorStateButtonClick: () => void;
}

const SensorsListItem: FC<SensorsListItemProps> = ({
  sensor,
  onToggleSensorStateButtonClick,
}) => {
  return (
    <Card size='2' className='sensor'>
      <Flex direction='column' gap='2' height='100%' justify='between'>
        <Flex gap='1' justify='between'>
          <Heading size='4'>{sensor.name}</Heading>
          <Badge color={sensor.connected ? 'green' : 'ruby'}>
            {sensor.connected ? 'Online' : 'Offline'}
          </Badge>
        </Flex>

        {sensor.value ? (
          <Flex justify='between' align='end'>
            <Text size='8' weight='bold'>
              {sensor.value}
            </Text>
            <Text color='gray'>{sensor.unit}</Text>
          </Flex>
        ) : (
          <Text>{'\u2014'}</Text>
        )}

        <Button
          onClick={onToggleSensorStateButtonClick}
          size='3'
          variant='soft'
          color={sensor.connected ? 'orange' : 'indigo'}
        >
          {sensor.connected ? 'Disconnect' : 'Connect'}
        </Button>
      </Flex>
    </Card>
  );
};

export default SensorsListItem;
