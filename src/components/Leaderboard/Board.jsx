import React,{useState} from 'react';
import Profile from './Profile';
import { Leaderboard } from './Dummydata';


export default function Board() {
    const [period,setperiod]=useState(0);
    const handleclick=(e)=>{
       setperiod(e.target.dataset.id)
    }
  return (
    <div className='board'>
        <h1 className='Leaderboard'>🏅LeaderBoard🏅</h1>

        {/* <hr/>
        <br/>
        <hr/> */}
        <div className='fullcard'>
        <div className='duration'>
            <button onClick={handleclick} data-id='7'>7 Days</button>
            <button onClick={handleclick} data-id='30'>30 Days</button>
            <button onClick={handleclick} data-id='0'>All-time</button>
        </div>
        <div className='scorecard'>
        <div className='card'>
        <th>Score</th>
        </div>
        <Profile Leaderboard={between(Leaderboard ,period)} />
        </div>
        </div>
    </div>
  )
}

function between(data,between)
{
     const today=new Date();
     const previous=new Date(today);
     previous.setDate(previous.getDate()-(between+1));
     let filter=data.filter(val=>{
        let userDate=new Date(val.date);
        if (between==0)
        {
            return val;
        }
        return previous<=userDate&&today>=userDate;
     }) 
    return filter.sort((a,b)=>{
      if(a.Score===b.Score){
        return  b.Score-a.Score;
      }
      else{
        return b.Score-a.Score;
      }
    }
    )
}