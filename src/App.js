import { useEffect } from "react";
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";
import logo from "./logo.svg";
import "./App.css";

const growthbook = new GrowthBook({
  apiHost: "http://localhost:3100",
  clientKey: "your-api-key",
  enableDevMode: true,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});

function App() {
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
    growthbook.setAttributes({
      id: "123",
    });
  }, []);

  return (
    <GrowthBookProvider growthbook={growthbook}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GrowthBookProvider>
  );
}

export default App;
