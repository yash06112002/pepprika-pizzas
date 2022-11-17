import React from 'react'
import Banner from "../components/Banner";
import Menu from '../components/Menu';
import MenuPart from '../components/MenuPart';
import TopPicks from '../components/TopPicks';

function Home() {
    return (
        <>
            <Banner />
            <Menu />
            <TopPicks />
            <MenuPart/>
        </>
    )
}

export default Home