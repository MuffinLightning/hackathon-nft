import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton, WalletModalButton } from '@solana/wallet-adapter-react-ui';
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
import FadeIn from 'react-fade-in';

import {
    useWallet, useConnection
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
    const network = WalletAdapterNetwork.Devnet;

    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

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
    const { connection } = useConnection();
    console.log(connection)
    const [pk, setPk] = useState<any>()

    useEffect(() => {
        setPk(publicKey)
      }, [publicKey]);

    if (!pk) {
        return (
            <FadeIn>
            <div className="App">
                <div className="container">
                <h1 className="white title">Points NFT Service</h1>
                <WalletModalButton></WalletModalButton>
                {/* <WalletMultiButton /> */}
                {/* <img src={logo} alt="Logo" /> */}
                </div>
            </div>
            </FadeIn>
        );
    }

    return (
        <FadeIn transitionDuration={600}>
        <div className="App">
            <div className="container">
            <h1 className="white title">Points NFT Service</h1>

            <WalletMultiButton />
            <DataContainer></DataContainer>
            </div>
        </div>
        </FadeIn>

    );
};
