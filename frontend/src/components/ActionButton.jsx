import { fetchData } from "../api/api"
import React, { useState } from 'react';
import {
    useWallet
} from '@solana/wallet-adapter-react';
import { Grid } from 'react-loader-spinner'


const ActionButton = ({set}) => {

    const [isFetching, setIsFetching] = useState(false)
    const { publicKey } = useWallet()

    const getData = async () => {

        setIsFetching(true)

        await new Promise(resolve => setTimeout(resolve, 1000));
        let result = await fetchData(publicKey.toBase58())
        setIsFetching(false)
        set(result)
    }

    return (
        <div className="loader-container">
        <button className ="wallet-adapter-button wallet-adapter-button-trigger refresh" disabled={isFetching} onClick={() => getData()}>{isFetching ? 'LOADING...' : 'Refresh Data'}</button>
        {isFetching ? <span className="grid-loader"><Grid color="#00BFFF" height={60} width={80} /></span>: ''}
        </div>
    )
}

export default ActionButton;