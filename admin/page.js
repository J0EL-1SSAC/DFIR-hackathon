"use client"

import { useState, useEffect } from "react"

export default function Admin() {

  const [alerts,setAlerts] = useState([])

  async function load(){
    const res = await fetch("/api/logs")
    const data = await res.json()
    setAlerts(data)
  }

  useEffect(()=>{
    load()
  },[])

  return (

    <div style={{
      padding:"40px",
      fontFamily:"Arial",
      background:"#0f172a",
      minHeight:"100vh",
      color:"white"
    }}>

      <h1 style={{
        fontSize:"32px",
        marginBottom:"30px"
      }}>
        SOC Security Dashboard
      </h1>

      <button
        onClick={load}
        style={{
          padding:"10px 20px",
          background:"#2563eb",
          border:"none",
          borderRadius:"6px",
          color:"white",
          marginBottom:"30px",
          cursor:"pointer"
        }}
      >
        Refresh Alerts
      </button>


      <div style={{
        background:"#1e293b",
        padding:"20px",
        borderRadius:"10px"
      }}>

        <table style={{
          width:"100%",
          borderCollapse:"collapse"
        }}>

          <thead>
            <tr style={{borderBottom:"1px solid #334155"}}>
              <th style={{textAlign:"left",padding:"10px"}}>User</th>
              <th style={{textAlign:"left",padding:"10px"}}>Event</th>
              <th style={{textAlign:"left",padding:"10px"}}>Threat Score</th>
              <th style={{textAlign:"left",padding:"10px"}}>Time</th>
            </tr>
          </thead>

          <tbody>

            {alerts.map((a,i)=>(
              <tr key={i} style={{borderBottom:"1px solid #334155"}}>

                <td style={{padding:"12px"}}>{a.user}</td>

                <td style={{padding:"12px"}}>
                  {a.event}
                </td>

                <td style={{padding:"12px"}}>
                  <span style={{
                    padding:"4px 10px",
                    borderRadius:"6px",
                    background:
                      a.score > 80 ? "#dc2626" :
                      a.score > 50 ? "#f59e0b" :
                      "#16a34a"
                  }}>
                    {a.score}
                  </span>
                </td>

                <td style={{padding:"12px"}}>
                  {new Date(a.time).toLocaleString()}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}