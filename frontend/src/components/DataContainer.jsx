import ActionButton from "./ActionButton";
import React, { useState } from 'react';
import FadeIn from 'react-fade-in';

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
                <FadeIn transitionDuration={700}>
                <br></br>
                <div className="nft-name">{x.name}</div>
                <br></br>
                <div>{b}</div>
                </FadeIn>
                </>
            )
        })
        
        return formatted.length > 0 ? formatted : <div>No NFTs found 😭😢😢👎</div>
    }


    return (
        <FadeIn>
        <div>
            <h1 className="white">Benefits</h1>

            <div className="data-container">
            <ActionButton set={setData} ></ActionButton>
            
            <div className="white">{renderBenefits()}</div>
            </div>
        </div>
        </FadeIn>
    )
}

export default DataContainer;