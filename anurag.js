import  App from'./App.js';


const Anurag =(props) => {
    const {name,city} = props;
    const country = "Europe";
    return (<div>
        <h1>
            ok Bye{name}
        </h1>
        <p>City: {city}</p>
        <p>Going to:{country}</p>
    </div>)
}

export default Anurag;