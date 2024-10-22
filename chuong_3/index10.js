function App() {
    const myArr = ['HTML', 'CSS', 'JS'];
    return (
        <div className="App">
            <CourseList data={myArr} />
        </div>
    );
}

class CourseList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.data.map((name, index) =>
                    <Course key={index} name={name} index={index} />
                )}
            </ul>
        );
    }
}

class Course extends React.Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
