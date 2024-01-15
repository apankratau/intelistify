import { FC } from 'react';
import { Flex, Text, Checkbox } from '@radix-ui/themes';

interface SensorsListFiltersProps {
  showOnlyConnected: boolean;
  onShowOnlyConnectedCheckboxChange: () => void;
}

const SensorsListFilters: FC<SensorsListFiltersProps> = ({
  showOnlyConnected,
  onShowOnlyConnectedCheckboxChange,
}) => {
  return (
    <Text as='label' size='2'>
      <Flex gap='2' my='4' ml='4' display='inline-flex'>
        <Checkbox
          onClick={onShowOnlyConnectedCheckboxChange}
          checked={showOnlyConnected}
        />{' '}
        Show only connected
      </Flex>
    </Text>
  );
};

export default SensorsListFilters;
