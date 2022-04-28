import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    GlowWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useState, useEffect } from 'react';
import DataContainer from './components/DataContainer';
import logo from './assets/none.png'
import {
    useWallet
} from '@solana/wallet-adapter-react';
require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <Context>
            <Content />
        </Context>
    );
};
export default App;

const Context: FC<{ children: ReactNode }> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
    // Only the wallets you configure here will be compiled into your application, and only the dependencies
    // of wallets that your users connect to will be loaded.
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new GlowWalletAdapter(),
            new SlopeWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

    );
};


const Content: FC = () => {
    const { publicKey } = useWallet();
    const [pk, setPk] = useState<any>()

    useEffect(() => {
        setPk(publicKey)
      }, [publicKey]); // Only re-run the effect if count changes

    if (!pk) {
        return (
            <div className="App">
                <div className="container">
                <h1 className="white">Points NFT Service</h1>
                <WalletMultiButton />
                <img src={logo} alt="Logo" />
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="container">
            <h1 className="white">Points NFT Service</h1>

            <WalletMultiButton />
            <DataContainer></DataContainer>
            </div>
        </div>
    );
};
