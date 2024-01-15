export interface Sensor {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string | null;
}

export enum Command {
  Connect = 'connect',
  Disconnect = 'disconnect',
}
