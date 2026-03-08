"use client"

import { useState } from "react"

export default function Employee(){

  const [status,setStatus] = useState("Ready")

  async function simulate(event){

    await fetch("/api/logs",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({
        user:"alice",
        event:event
      })
    })

    setStatus("Activity Sent: " + event)
  }

  return(

    <div style={{
      minHeight:"100vh",
      background:"#0f172a",
      color:"white",
      fontFamily:"Arial",
      padding:"40px"
    }}>

      <h1 style={{
        fontSize:"32px",
        marginBottom:"30px"
      }}>
        Employee Activity Portal
      </h1>


      <div style={{
        background:"#1e293b",
        padding:"30px",
        borderRadius:"10px",
        maxWidth:"600px"
      }}>

        <h2 style={{marginBottom:"20px"}}>
          Simulate Employee Actions
        </h2>


        <button
          onClick={()=>simulate("large_transfer")}
          style={btn}
        >
          Large File Transfer
        </button>


        <button
          onClick={()=>simulate("location_change")}
          style={btn}
        >
          Login From New Location
        </button>


        <button
          onClick={()=>simulate("confidential_download")}
          style={btn}
        >
          Download Confidential Files
        </button>


        <div style={{
          marginTop:"25px",
          padding:"15px",
          background:"#0f172a",
          borderRadius:"6px"
        }}>
          Status: {status}
        </div>

      </div>

    </div>

  )
}

const btn = {
  display:"block",
  width:"100%",
  padding:"12px",
  marginBottom:"12px",
  background:"#2563eb",
  border:"none",
  borderRadius:"6px",
  color:"white",
  cursor:"pointer",
  fontSize:"15px"
}