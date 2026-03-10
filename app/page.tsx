export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>

      <h1 style={{fontSize:"36px", marginBottom:"20px"}}>
        DFIR Insider Threat Detection System
      </h1>

      <p style={{marginBottom:"30px"}}>
        Monitor suspicious employee behaviour and detect insider threats.
      </p>

      <div style={{display:"flex", gap:"20px"}}>

        <a href="/employee">
          <button style={{
            padding:"12px 20px",
            background:"#2563eb",
            border:"none",
            borderRadius:"6px",
            color:"white",
            cursor:"pointer"
          }}>
            Employee Portal
          </button>
        </a>

        <a href="/admin">
          <button style={{
            padding:"12px 20px",
            background:"#16a34a",
            border:"none",
            borderRadius:"6px",
            color:"white",
            cursor:"pointer"
          }}>
            SOC Dashboard
          </button>
        </a>

      </div>

    </div>
  )
}