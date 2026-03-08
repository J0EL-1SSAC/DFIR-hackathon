"use client"

import {useState,useEffect} from "react"

export default function Admin(){

const [alerts,setAlerts] = useState([])

async function load(){

const res = await fetch("/api/logs")

const data = await res.json()

setAlerts(data)

}

useEffect(()=>{
load()
},[])

return(

<div style={{padding:"40px"}}>

<h1>SOC Dashboard</h1>

<button onClick={load}>Refresh Alerts</button>

<table border="1" cellPadding="10">

<thead>
<tr>
<th>User</th>
<th>Event</th>
<th>Threat</th>
<th>Score</th>
<th>Time</th>
</tr>
</thead>

<tbody>

{alerts.map((a,i)=>(

<tr key={i}>
<td>{a.user}</td>
<td>{a.event}</td>
<td>{a.level}</td>
<td>{a.score}</td>
<td>{a.time}</td>
</tr>

))}

</tbody>

</table>

</div>

)

}