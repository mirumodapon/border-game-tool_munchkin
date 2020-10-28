import Header from './component/Header';
import Level from './component/Level';
import Attack from './component/Attack';
import Connect from './component/Connect'
import './css/app.scss';

function App() {
  return (
    <div id="container">
      <Header></Header>
      <Level></Level>
      <Attack></Attack>
      <Connect></Connect>
    </div>

  );
}

export default App;
