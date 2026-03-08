function Universe() {
    return (
        <div className="container mt-5">
            <div className="mt-5 row text-center">
                <h1>The Zerodha Universe</h1>
                <p>
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>
                <div className="row text-center">
                    <div className="col-4 p=3 mt-5">
                        <img style={{width:"80%"}} src="media/images/images/smallcaseLogo.png"></img>
                        <p className="text-muted text-small">
                            Thematic investment platform
                        </p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img style={{width:"40%"}} src="media/images/images/streakLogo.png"></img>
                        <p className="text-muted text-small">Algo & strategy platform</p>
                    </div>
                    <div className="col-4 p-3 mt-5">
                        <img style={{width:"40%"}} src="media/images/images/sensibullLogo.svg"></img>
                        <p className="text-muted text-small">Options trading platform</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-4 p=3 mt-5">
                    <img src="media/images/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
                    <p className="text-muted text-small">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"50%"}} src="media/images/images/goldenpiLogo.png"></img>
                    <p className="text-muted text-small">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img style={{width:"26%"}} src="media/images/images/dittoLogo.png"></img>
                    <p className="text-muted text-small">Insurance</p>
                </div>
                </div>
                <button
                    className="p-2 btn btn-primary fs-5"
                    style={{ width: "18%", margin: "0 auto" }}
                >
                    Signup Now
                </button>
            </div>
        </div>
    );
}

export default Universe;
