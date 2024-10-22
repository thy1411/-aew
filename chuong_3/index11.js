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

class PostList extends React.Component {
    render() {
        return (
            <div className="post-list">
                <PostItem tilte='Giới thiệu về C# và .NET platform' desc='Khoá học hướng dẫn nhập môn ngôn ngữ C#' publisheAt='Hai ngày trước' />
                <PostItem
                    title='Giới thiệu về ReactJS'
                    desc='Khoá học hướng dẫn nhập môn lập trình với ReactJS'
                    publisheAt='Một ngày trước'
                />
                <PostItem
                    title='Giới thiệu về NodeJS'
                    desc='Khoá học hướng dẫn nhập môn lập trình với NodeJS'
                    publisheAt='Ba ngày trước'
                />
            </div>
        );
    }
}


class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <PostList />
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);