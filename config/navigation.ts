import { knowledgeBaseURL } from './data';

export interface NavigationLink {
  name: string;
  to: string;
  external?: boolean;
  disabled?: boolean;
}

export const navigationLinks: NavigationLink[] = [
  {
    name: 'NAV_VIEW',
    to: '/account'
  },
  {
    name: 'NAV_GENERATEWALLET',
    to: '/generate'
  },
  // {
  //   name: 'NAV_SWAP',
  //   to: '/swap'
  // },
  {
    name: 'NAV_CONTRACTS',
    to: '/contracts'
  },
  // {
  // name: 'NAV_ENS',
  // to: '/ens'
  // },
  {
    name: 'NAV_SIGN',
    to: '/sign-and-verify-message'
  },
  {
    name: 'NAV_TXSTATUS',
    to: '/tx-status'
  },
  {
    name: 'NAV_HELP',
    to: knowledgeBaseURL,
    external: true
  }
].filter(link => !link.disabled);
