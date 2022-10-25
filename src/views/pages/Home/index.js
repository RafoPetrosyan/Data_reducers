import React from 'react';

import useContainer from "./hook";

const Home = () => {
    const { handleSignOut } = useContainer();

    return (
        <>
            home
            <button onClick={handleSignOut}>Log auth</button>
        </>
    )
};

export default Home;