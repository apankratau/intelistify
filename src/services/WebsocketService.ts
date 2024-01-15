import config from 'config';

class WebsocketService {
  private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(config.websocketUrl);
  }

  on<DataType>(listener: (data: DataType) => void) {
    this.socket.addEventListener('message', (event) => {
      try {
        const eventData: DataType = JSON.parse(event.data);

        listener(eventData);
      } catch {
        console.log('Unable to parse server message event data');
      }
    });
  }

  off(listener: (data: any) => void) {
    this.socket.removeEventListener('message', listener);
  }

  send<DataType>(data: DataType) {
    this.socket.send(JSON.stringify(data));
  }
}

const websocketService = new WebsocketService();

export default websocketService;
