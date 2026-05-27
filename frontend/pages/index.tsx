import { useEffect, useState } from "react";

export default function Home() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/players")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>⚽ ScoutAI</h1>
      <p style={styles.subtitle}>Football Transfer Market Dashboard</p>

      <div style={styles.grid}>
        {players.map((p: any) => (
          <div key={p.id} style={styles.card}>
            <h2 style={styles.name}>{p.name}</h2>
            <p>Club: {p.club}</p>
            <p>Age: {p.age}</p>
            <p>Value: €{p.value}M</p>

            <button
              style={styles.button}
              onClick={() => alert("AI Scout Score loading...")}
            >
              View AI Scout Score
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles: any = {
  page: {
    background: "#0b0f19",
    color: "white",
    minHeight: "100vh",
    padding: 20,
    fontFamily: "Arial"
  },
  title: {
    fontSize: 40,
    marginBottom: 0
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 30
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: 20
  },
  card: {
    background: "#141b2d",
    padding: 15,
    borderRadius: 10,
    border: "1px solid #222"
  },
  name: {
    marginBottom: 10
  },
  button: {
    marginTop: 10,
    padding: "8px 10px",
    background: "#2d6cdf",
    color: "white",
    border: "none",
    borderRadius: 5,
    cursor: "pointer"
  }
};