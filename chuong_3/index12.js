class PostItem extends React.Component {
    render() {
        return (
            <div className='post-item'>
                <h2 className='post-title'>{this.props.title}</h2>
                <h2 className='post-desc'>{this.props.desc}</h2>
                <p className='post-publisheAt'>{this.props.publisheAt}</p>
            </div>
        );
    }
}

class SuKien extends React.Component {
    handleButtonClick = (e) => {
        alert('Hello React')
    }
    render() {
        return (
            <div className="post-list">
                <button onClick={this.handleButtonClick}>Click Me</button>
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <SuKien />
        );
    }
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);