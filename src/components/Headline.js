import LikeCounter from "./LikeCounter";
function Headline(props) { 
    return ( 
      <div className ="Headline"> 
        <h2>{props.time}</h2> 
        <h2>{props.text} <img src = {props.icon} alt="icon"></img></h2>
        <p> temp : {props.temp} &deg;C, Wind:{props.wind} km/h </p>

        <LikeCounter /> 
      </div> 
    ); 
  }

  export default Headline;