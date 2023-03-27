import Headline from "./components/Headline"
import useWeather from './api';

function App() {
  const {loading ,headlines ,error } = useWeather();

  if(loading){
    return <p>loading....</p>
  }
  if (error) {
    return <p>Something went wrong: {error.message}</p>;
    }
  return (
    <div className="App">
      <h1>Brisbane Weather Forecast Today</h1>
      {
        headlines.map(
          (headline) => 
          (<Headline key={headline.time}
            time={headline.time}
            text={headline.text}
            temp={headline.temp}
            wind={headline.wind}
            icon={headline.icon}
            />)
          )
      }
       
    </div>
  );
}

export default App;
