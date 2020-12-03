import './App.css';

// import Button from './Button';
import DataLoader from './FetchData';

function App() {
  return (
    <div className="App">
      {/* note how obtuse this code is */}
      <DataLoader
        render={
          data => {
            return (
              <div>
                <ul>
                  { data.map(element => (
                    <li key={element.id}>{element.title}</li>
                  ))}
                </ul>
              </div>
            );
          }
        }
      />
    </div>
  );
}

export default App;
