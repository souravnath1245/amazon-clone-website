// import logo from './logo.svg';
// import { useState } from 'react';
// import './App.css';
import Header from './component/heander/Header';
import Main from './component/main/Main';

// import Self from './component/self';

function App() {
  // const [selfData, setSelfData] = useState([])
  // fetch('./self.json').then(res => res.json()).then(data => setSelfData(data))
  return (
    <div className="App someStyle">
      <Header />
      <Main />
      


    {/* //   {selfData.map(data=> <Self key={data._id}  data={data}/>)} */}

      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
