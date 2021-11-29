import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import CounterLabel from './counter-label'
import '../component-css/counter.css'


const Counter = ()=>{
    const [count,setCount] = useState();
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json').
        then((res)=>{
            console.log(res);
            if(res.data == null){
                setCount(1);
            }
            else{
                setCount(res.data);
            }
        }).catch(error=>console.log(error));
    },[])
    useEffect(()=>{
        setLoading(true);
        axios.put(' https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json',
           JSON.stringify({
                "rohith_satya_nivas":count
            })).
        then((res)=>{console.log(res);
        setLoading(false);
        }).catch((error)=>console.log(error));
    },[count])
    return (
        <>
        <div className = "load">{loading?
        <div><div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        </div><p className="csaved">Saving counter values...</p></div>:<div className="csaved">Value saved ✔️</div>}</div>
        <div className="cnter">
        <button className="btnl" onClick={()=>setCount(count-1)}>-</button>
        <button className="btnd" disabled>{count}</button>
        <button className="btnr" onClick = {()=>{
            if(count<1000) setCount(count+1)}}>+</button>
        </div>
        <div className="counterlabel"><CounterLabel value={count}/></div>
        </>
    );
};

export default Counter;