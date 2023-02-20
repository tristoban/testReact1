import logo from './logo.svg';
import './App.css';
import ContactList from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx*/}
        {/*<Greeting name='Martin'></Greeting>*/}
        {/*<GreetingF name='Matias'></GreetingF>*/}
        {/*<TaskListComponent></TaskListComponent>*/}
        <ContactList></ContactList>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learning React
        </a>
      </header>
    </div>
  );
}

export default App;
