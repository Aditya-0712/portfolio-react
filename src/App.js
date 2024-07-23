import Mobile from "./components/Mobile";
import Pc from "./components/Pc";

function App(){
    return (
        <div style={{flexDirection:"column"}}>
            <Mobile />
            <Pc />
        </div>
    );
}

export default App;