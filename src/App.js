import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>News Aggregator</h1>
          <nav>
            <a href="/">Home</a> | <a href="/top-stories">Top Stories</a> | <a href="/technology">Technology</a>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/top-stories" component={TopStoriesPage} />
            <Route path="/technology" component={TechnologyPage} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

function HomePage() {
  return <h2>Welcome to the Home Page</h2>;
}

function TopStoriesPage() {
  return <h2>Top Stories News</h2>;
}

function TechnologyPage() {
  return <h2>Technology News</h2>;
}

export default App;

