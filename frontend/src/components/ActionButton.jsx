import { fetchData } from "../api/api"
import React, { useState } from 'react';
import {
    useWallet
} from '@solana/wallet-adapter-react';



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
        <button className ="wallet-adapter-button wallet-adapter-button-trigger refresh" disabled={isFetching} onClick={() => getData()}>{isFetching ? 'LOADING...' : 'Refresh Data'}</button>
    )
}

export default ActionButton;