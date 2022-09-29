import { useSession } from 'next-auth/react';
import React from 'react'
import Navbar2 from '../Components/Navbar2';

const Home = () => {
    const { data: session } = useSession();

    console.log('0: ', session);

    return <>
        <Navbar2 />
        <div className='center'>welcome {session?.user?.name}</div>

    </>



}
export default Home