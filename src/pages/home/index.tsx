import { Container, Separator } from '@radix-ui/themes';
import Header from 'components/Header';
import SensorsList from 'components/SensorsList';

const Home = () => {
  return (
    <Container px='4' size='3'>
      <Header />

      <Separator size='4' mt='2' mb='8' />

      <SensorsList />
    </Container>
  );
};

export default Home;
