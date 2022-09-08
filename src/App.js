import "./App.css";
import TourCard from "./card";

function App() {
  return (
    <div className="App">
      <main className="main">
        <section>
          <div className="title">
            <h1>our tours</h1>
            <div className="underline"></div>
          </div>
        </section>
        <TourCard />
      </main>
    </div>
  );
}

export default App;
