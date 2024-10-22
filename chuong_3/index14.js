function SuKien() {
    const handleChangeText = (e) => {
        console.log(e.target.value);
    }

    const handleButtonClick = (e) => {
        alert('Hello React');
    }

    return (
        <div>
            Họ tên: <input type='text' onChange={handleChangeText} />
            <button onClick={(e)=>{handleButtonClick(e)}}>Click Me</button>
        </div>
    )
}

function App() {
    return (
        <SuKien />
    );
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
