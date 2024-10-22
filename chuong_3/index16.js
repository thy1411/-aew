class Child extends React.Component {
    thoiLuong = '150 giờ'
    render() {
        return (
            <div>
                <li>{this.props.name}</li>
                <button onClick={this.props.handlaClick(this.thoiLuong)}>Click Me</button>
            </div>
        )
    }
}

class Parent extends React.Component {
    Courses = [
        {
            ten: 'JavaScrip CB',
            tomTat: 'Trinh do co ban'
        },
        {
            ten: 'JavaScrip NC',
            tomTat: 'Trinh do nang cao'
        },
    ]
    handlaClickButton = (tl) => {
        console.log(this.Courses, tl)
    }
    render() {
        return (
            <div>
                <Child name={this.Courses[0].ten} handlaClick={this.handlaClickButton} />
                <Child name={this.Courses[1].ten} handlaClick={this.handlaClickButton} />
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <Parent />
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);