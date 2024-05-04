import '../App.css';
import {useState} from "react";
import Counter from "../component/common/Counter/Counter";
import CounterButton from "../component/common/Button/CounterButton";

function CounterView() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter((prev) => prev + 1);
    }

    const decrease = () => {
        setCounter((prev) => prev - 1);
    }

    return (
        <div className="App">
            <div className="App-header">
                <Counter value={counter}/>
                <div>
                    <CounterButton handleOnClick={() => increase()}>
                        Increase
                    </CounterButton>
                    <CounterButton handleOnClick={() => decrease()}>
                        Decrease
                    </CounterButton>
                </div>
            </div>
        </div>
    );
}

export default CounterView;
