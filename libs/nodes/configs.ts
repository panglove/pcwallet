import { StaticNetworkIds } from 'types/network';
import { RawNodeConfig } from 'types/node';

export const makeNodeName = (network: string, name: string) => {
  return `${network.toLowerCase()}_${name}`;
};

export const NODE_CONFIGS: { [key in StaticNetworkIds]: RawNodeConfig[] } = {
  ETH: [
    {
      name: makeNodeName('ETX', 'ETX'),
      type: 'rpc',
      service: 'ETX',
      url: 'http://47.244.49.234:8080'
    }
  ],

};

export default NODE_CONFIGS;
