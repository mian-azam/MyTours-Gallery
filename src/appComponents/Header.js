

function Header() {
    return (
        <header>
            <div className="header container">
                <div className="title">
                    <img className="logo" src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo"></img>
                    <h1>My Tours</h1>
                </div>
                <div className="navigation">
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header