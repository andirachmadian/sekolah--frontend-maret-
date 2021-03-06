import React from 'react'
import * as zz from './Header'
import * as RB from 'react-bootstrap'

const myStyle = {
    backgroundColor:'yellow', 
    width:500, 
    margin:10, 
    padding:10
}

function Layout() {
    return (
        <div>
            <RB.Button variant="primary">Primary</RB.Button>
            <zz.Header></zz.Header>
            <div style={myStyle}>
                    <div>
                        <h1>{zz.abc}</h1>
                    </div>
                    <div>
                        <h1>Kharisma</h1>
                    </div>
                    <div>
                        <h1>Rachmadian</h1>
                    </div>
            </div>
            <RB.Container>
                <RB.Row>
                    <RB.Col>1 of 2</RB.Col>
                    <RB.Col>2 of 2</RB.Col>
                </RB.Row>
                <RB.Row>
                    <RB.Col>1 of 3</RB.Col>
                    <RB.Col>2 of 3</RB.Col>
                    <RB.Col>3 of 3</RB.Col>
                </RB.Row>
            </RB.Container>
            <zz.Footer></zz.Footer>

        </div>    
    )
}


export default Layout