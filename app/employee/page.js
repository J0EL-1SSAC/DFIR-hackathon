"use client"

import {useState} from "react"

export default function Employee(){

const [message,setMessage] = useState("")

async function simulate(event){

const res = await fetch("/api/logs",{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
user:"alice",
event:event
})
})

const data = await res.json()

if(data.level === "MEDIUM"){
setMessage("⚠ Medium Threat: Please meet your manager.")
}

if(data.level === "HIGH"){
setMessage("🚨 HIGH Threat: Account suspended. Investigation started.")
}

}

return(

<div style={{padding:"40px"}}>

<h1>Employee Portal</h1>

<button onClick={()=>simulate("confidential_download")}>
Download Confidential File
</button>

<br/><br/>

<button onClick={()=>simulate("large_transfer")}>
Transfer Large Data
</button>

<br/><br/>

<button onClick={()=>simulate("location_change")}>
Login From New Location
</button>

<br/><br/>

<p>{message}</p>

</div>

)

}