import React from 'react';
// import { Leaderboard } from './Dummydata';

export default function Profile({Leaderboard}) {
  return (
    <div id="profile">
     {Item(Leaderboard)}
    </div>
  )
}
// var data=[];
function Item(data){
    
    return (
        <>
        {
            data?.map((value,index)=>(
        <div className='flex' key={index}>
            <div className='item'>
                <img src={value.img}/>
                <div className='info'>
                    <h3 className='name text-dark'>{value.name}</h3>
                    
                </div>
            </div>
            <div className='item'>
                <span>{value.Score}</span>
            </div>
        </div>
             ) )
        }
        </>
       
    )
}