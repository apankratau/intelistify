import { Flex, Box, Text, Switch } from '@radix-ui/themes';
import { ReactComponent as Logo } from 'images/logo.svg';
import './header.css';

const Header = () => {
  return (
    <Flex align='center' justify='between' py='2'>
      <Flex px='4'>
        <Box width='7' height='7'>
          <Logo className='headerLogo' />
        </Box>
      </Flex>

      {/* TODO: Implement dark theme switch */}
      <Text as='label' size='2'>
        <Flex gap='2' px='4'>
          Dark Mode
          <Switch />
        </Flex>
      </Text>
    </Flex>
  );
};

export default Header;
