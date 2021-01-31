import './App.scss';
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/HomePage.page';
import ContactUs from './pages/ContactUs.page';
import Header from './components/header/header.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contactanos" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;