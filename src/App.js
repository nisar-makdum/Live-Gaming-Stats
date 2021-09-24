/*
 * Name: Nisar Makdum.
 * Date: 25 September 2021.
*/

import './App.css'
import Participants from './Components/Participants/Participants';


function App() {

  return (
    <div data-testid="test-App" className="App">
      <header className="App-header">
        <h1>Live-Gaming-Stats</h1>
        <Participants></Participants>
      </header>
    </div>
  );
}

export default App;
