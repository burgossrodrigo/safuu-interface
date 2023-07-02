import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import '@rainbow-me/rainbowkit/styles.css';

import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import { bsc, bscTestnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

import background from './assets/luxury-plain-green-gradient-abstract-studio-background-empty-room-with-space-your-text-picture.jpg'

// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

import { createGlobalStyle } from 'styled-components';


const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bscTestnet, bsc],
  [publicProvider()],
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

declare global {
  interface Window {
    ethereum: import('ethers').BrowserProvider;
  }
}

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  background-image: url(${background});
  background-size: cover;
  width: 100%
}
`;

//#164B1B

root.render(
  <WagmiConfig config={config}>
    <RainbowKitProvider theme={darkTheme({
      accentColor: '#164B1B',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })} chains={chains}>
    <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
