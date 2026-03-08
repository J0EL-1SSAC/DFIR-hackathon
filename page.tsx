export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>DFIR Insider Threat Detection System</h1>

      <p>
        AI SOC dashboard for detecting suspicious network activity
        and insider threats.
      </p>

      <br />

      <a href="/employee">
        <button style={{ padding: "10px", marginRight: "10px" }}>
          Employee Portal
        </button>
      </a>

      <a href="/admin">
        <button style={{ padding: "10px" }}>
          SOC Admin Dashboard
        </button>
      </a>

    </main>
  );
}