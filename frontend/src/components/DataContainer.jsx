import ActionButton from "./ActionButton";
import Data from "./Data";
import React, { useState } from 'react';

const DataContainer = () => {
    const [data, setData] = useState([])

    const renderBenefits = () => {
        
        let formatted = data.map((x) => {
            let b;

            b = x.benefits.map((ben) => {
                return (
                    <li>{ben}</li>
                )
            })

            return (
                <>
                <br></br>
                <div className="nft-name">{x.name}</div>
                <br></br>
                <div>{b}</div>
                </>
            )
        })
        
        return formatted.length > 0 ? formatted : <div>No NFTs found 😭😢😢👎</div>
    }


    return (
        <div>
            <h1 className="white">Data</h1>

            <div className="data-container">
            <ActionButton set={setData} ></ActionButton>
            <div className="white">{renderBenefits()}</div>
            </div>
        </div>
    )
}

export default DataContainer;