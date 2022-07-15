import React,{useEffect, useState} from 'react'
import {of} from 'rxjs'
const source=['Prabhakar','Pramod','Praveen','Srini']
const names$=of(source) //returns observable
export function Demo(){
    const[names,setNames]=useState()
    
    useEffect(()=>{
        const sub=names$.subscribe(setNames) //subscribe only once
        return ()=>sub.unsubscribe()//clean the cache of stream
    },[])
    return(
        <dev>
            <h3 className='bg-warning text-center'>RxJS with React</h3>
            <List items={names}></List>
        </dev>
    )
}

const List=({items=[],loading=false})=>(
    <ul className={loading?'Loading':null}>
        {items.map(item =>(
            <li key={item}>{item}</li>
        ))}
    </ul>
)
