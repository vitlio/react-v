import React, { useEffect, useState } from 'react';
import * as axios from 'axios'

const Six = () => {

let [users, setUsers] = useState([]);
let [count, setCount] = useState(0);
let [times, setTimes] = useState(0);
let [{count1, times1}, setCT] = useState({count1: 0, times1: 0})
// console.log(1);
useEffect(() => {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => setUsers(response.data.items))
        .catch(err => console.log(err))
}, []);

useEffect(() => console.log(users), [users]);
useEffect(() => document.title = `Вы нажали ${times} раз` , [times]);

if(count1 === 0 || times1 === 0)
    setCT({count1: 1, times1: 1});

console.log('count1: ', count1);
function inc(){
    setUsers([...users], users[0].followed = !users[0].followed)
}
function plus(){
    setCount(count + 1);
    setTimes(times + 1);
}
function minus(){
    setCount(count - 1);
    setTimes(times + 1);
}
    return (
        <div>
            <button onClick={inc}>Followed</button><br />
            <span>{count}</span><br />
            <span>Вы нажали {times} раз</span><br />
            <button onClick={plus}>Plus 1</button><button onClick={minus}>Minus 1</button>
        </div>
    )
}

export default Six;