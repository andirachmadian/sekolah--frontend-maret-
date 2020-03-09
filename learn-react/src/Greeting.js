import React , {useState} from 'react'

const Greeting = (props) => {
    const {name, age} = props
    const [count, setCount] = useState(0)
    const [umur, setUmur] = useState(age)
    return(
        <div style={{backgroundColor: '#eb4034', color: 'white', padding: 10, margin: 10}}>
            <h3>Hello nama saya {name}</h3>
            <h4>Umur Saya {age} tahun</h4>
    <h3>{count}</h3>
    <button onClick={() => setCount(count + 1)}>+1</button>
        </div> 
    )
}

export default Greeting