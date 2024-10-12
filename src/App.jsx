import './index.css' 

const App = () => {
    return (
        <>
        <div className="wrapper">
            <div className="header">
                <div className="logo">
                <img src= "./src/react-logo.png" alt='logo' />
                <p>React JS!</p>
                </div>
                <button onClick={() => document.write('Website Deleted. Press Refresh If You Want The Site To Come Back!')}>Click Me To Remove Everything in this website!</button>
        </div>
        </div>
        </>
    );
};  
                           
export default App;
