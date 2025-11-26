import React from "react";
import './bag.css';

type BagProps = {
  bagHandler: (open: boolean) => void;
};

function Bag({ bagHandler }: BagProps) {
    return (
        <div className="bag-element">
            <div className="bag-header">
                <h2>Your Bag</h2>
                <button onClick={() => bagHandler(false)}>Close</button>
            </div>
            <div className="bag-body">
                <h1>This is Bag Page</h1>
                <p>Your selected items will appear here.</p>
            </div>
        </div>
    );

}

export default Bag;