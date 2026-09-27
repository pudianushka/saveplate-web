import { useState } from "react";
import "./App.css";

function App() {
  const [role, setRole] = useState("provider");

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">🍽️ Save Plate</div>

        <nav>
          <button onClick={() => setRole("provider")}>Provider</button>
          <button onClick={() => setRole("recipient")}>Recipient</button>
          <button onClick={() => setRole("admin")}>Admin</button>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <p className="tagline">SAVE FOOD • SERVE PEOPLE</p>

            <h1>
              Turning Surplus Food
              <br />
              Into <span>Hope.</span>
            </h1>

            <p className="description">
              Save Plate connects food providers with nearby people and
              organizations that need surplus food.
            </p>

            <div className="buttons">
              <button
                className="primary"
                onClick={() => setRole("provider")}
              >
                Donate Food
              </button>

              <button
                className="secondary"
                onClick={() => setRole("recipient")}
              >
                Find Food
              </button>
            </div>
          </div>

          <div className="food-card">
            <div className="plate">🍲</div>
            <h2>Every Plate Matters</h2>
            <p>Reduce food waste. Feed communities.</p>
          </div>
        </section>

        <section className="dashboard">
          <h2>{role === "provider" && "Food Provider Dashboard"}</h2>
          <h2>{role === "recipient" && "Food Recipient Dashboard"}</h2>
          <h2>{role === "admin" && "Admin Dashboard"}</h2>

          <div className="cards">
            <div className="card">
              <span>🍱</span>
              <h3>Surplus Food</h3>
              <p>Share available food with nearby recipients.</p>
              <button>View Food</button>
            </div>

            <div className="card">
              <span>📍</span>
              <h3>Nearby Requests</h3>
              <p>Find food requests and help your community.</p>
              <button>View Requests</button>
            </div>

            <div className="card">
              <span>🚚</span>
              <h3>Save Plate Transport</h3>
              <p>Choose platform transport or your own vehicle.</p>
              <button>Track Transport</button>
            </div>

            <div className="card">
              <span>📊</span>
              <h3>Impact</h3>
              <p>Track meals rescued and food waste reduced.</p>
              <button>View Impact</button>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Save Plate • Reduce Waste • Feed Communities</p>
      </footer>
    </div>
  );
}

export default App;