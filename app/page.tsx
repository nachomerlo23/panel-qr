"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const CORRECT_CODE = "1010";

  const handlePress = (value: string) => {
    if (input.length >= 4) return;
    setInput(input + value);
    setError(false);
  };

  const handleClear = () => {
    setInput("");
    setError(false);
  };

  const handleSubmit = () => {
    if (input === CORRECT_CODE) {
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (unlocked) {
    return (
      <main style={styles.container}>
        <h1>Acceso concedido</h1>
        <img src="/qr.png" alt="QR" style={{ width: 250 }} />
      </main>
    );
  }

  return (
    <main style={styles.container}>
      <h1>Ingresá el código</h1>

      <div style={styles.display}>
        {input.padEnd(4, "•")}
      </div>

      {error && <p style={styles.error}>CLAVE INCORRECTA</p>}

      <div style={styles.keypad}>
        {["1","2","3","4","5","6","7","8","9","*","0","#"].map((key) => (
          <button
            key={key}
            style={styles.button}
            onClick={() => handlePress(key)}
          >
            {key}
          </button>
        ))}
      </div>

      <div style={styles.actions}>
        <button onClick={handleClear}>Borrar</button>
        <button onClick={handleSubmit}>OK</button>
      </div>
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    fontFamily: "sans-serif",
  },
  display: {
    fontSize: 32,
    letterSpacing: 8,
  },
  keypad: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 80px)",
    gap: 10,
  },
  button: {
    height: 60,
    fontSize: 22,
  },
  actions: {
    display: "flex",
    gap: 12,
  },
  error: {
    color: "red",
    fontWeight: "bold",
  },
};
