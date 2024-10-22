function App() {
    const myArr = ['HTML', 'CSS', 'JS']
    return (
        <div className="App">
            <CourseList data={myArr} />
        </div>
    );
}

function CourseList({ data }) {
    return (
        <ul>
            {data.map((name, index) =>
                <Course name={name} index={index} />
            )}
        </ul>
    )
}

function Course({ name, index }) {
    return (
        <li key={index}>{name}</li>
    )
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);