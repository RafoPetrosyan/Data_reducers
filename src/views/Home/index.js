import React from 'react';

import useContainer from "./hook";

const Home = () => {
    const {handleSignOut, showExampleModal} = useContainer();

    return (
        <div>
            home
            <button onClick={handleSignOut}>Log auth</button>

            <button onClick={showExampleModal}>Show modal</button>
        </div>
    )
};

export default Home;