import React from 'react';
import Label from './Label'
import Countries from './Countries'

const arr = [1,2,3,4,5,6,7,8,9,10];

function Home() {
    return(
        <div>
            <h1>Ini Halaman Home</h1>
            {
                arr.map(a =>{
                    return <Label urutan={a} />
                })
            }
            <Countries />
        </div>
    )
}

export default Home;