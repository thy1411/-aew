function App() {
    return (
        <div className="wrapper">
            <div className='post-list'>
                <div className='post-item'>
                    <h2 className='post-title'>Giới thiệu về C# và .NET PlatForm</h2>
                    <h2 className='post-desc'>Khoá học hướng dẫn nhập môn ngôn ngữ C#</h2>
                    <p className='post-publisheAt'>Hai ngày trước</p>
                </div>
            </div>
        </div>
    );
}


const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);