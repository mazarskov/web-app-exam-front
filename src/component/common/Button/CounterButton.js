import './CounterButton.css';

function CounterButton({handleOnClick, children}) {

    return (
        <button onClick={handleOnClick} className="counter-button">
            {children}
        </button>
    );
}

export default CounterButton;
