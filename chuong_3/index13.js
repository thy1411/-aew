class SuKien extends React.Component {
    handleButtonClick = (e) => {
        alert('Hello React')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlaButtonClick}>Click Me</button>
            </div>
        )
    }
}

function App() {
    return (
        <SuKien />
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);