function App() {
    return (
        <div className="wrapper">
            <h1>Welcome to ReactJS</h1>
        </div>
    );
}


const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
