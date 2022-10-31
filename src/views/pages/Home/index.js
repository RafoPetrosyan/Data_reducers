import React from 'react';

import useContainer from "./hook";

const Home = () => {
    const { handleSignOut } = useContainer();

    return (
        <div className="home">
            home
            <button onClick={handleSignOut}>Log auth</button>
            <p className="text">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the
                leap into electronic typesetting, remaining essentially unchanged. I
                t was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
    )
};

export default Home;