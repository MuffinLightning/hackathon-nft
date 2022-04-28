import { fetchData } from "../api/api"
import React, { useState } from 'react';


const ActionButton = ({set}) => {

    const [isFetching, setIsFetching] = useState(false)

    const getData = async () => {

        setIsFetching(true)

        await new Promise(resolve => setTimeout(resolve, 1000));
        let result = await fetchData()
        setIsFetching(false)
        set([{'name': 'NFT1', 'benefits': ['Subway $5 off', 'McDonalds free cone'] }])
        return result
    }

    return (
        <button className ="wallet-adapter-button wallet-adapter-button-trigger refresh" disabled={isFetching} onClick={() => getData()}>{isFetching ? 'LOADING...' : 'Refresh Data'}</button>
    )
}

export default ActionButton;