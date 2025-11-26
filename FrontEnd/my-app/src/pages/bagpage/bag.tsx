import React from "react";
import './bag.css';

type BagProps = {
  bagHandler: (open: boolean) => void;
};

function Bag({ bagHandler }: BagProps) {
    return (
        <>
        <div className="bag-element">
            <button onClick={() => bagHandler(false)}>Close</button>
            <div>
                <h1>This is Bag Page</h1>
            </div>
        </div>
        </>
    );
}

export default Bag;