function Hero(){
    return(
        <div className="container p-5">
            <div className="row mb-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="mb-5 text-muted fs-4">Free equity investments and flat ₹20 tradey and F&O trades</h3>
            </div>
            <div className="mt-5 row">
                <div className=" text-center col-4">
                    <img src="media/images/images/pricingMF.svg"></img>
                    <h2>Free equity delivery</h2>
                    <p className="text-muted fs-6 mt-4">All equity delivery investments (NSE, BSE), are
                        absolutely free - ₹0 brokerage.
                    </p>
                </div>
                <div className="text-center col-4">
                    <img src="media/images/images/intradayTrades.svg"></img>
                    <h2>Intraday and F&O trades</h2>
                    <p className="text-muted fs-6 mt-4">Flat Rs.20 or 0.03% (whichever is lower)
                        per executed order on intraday trades across, currency and commodity trades.
                    </p>
                </div>

                <div className=" text-center col-4">
                    <img src="media/images/images/pricingEquity.svg"></img>
                    <h2>Free direct MF</h2>
                    <p className="text-muted fs-6 mt-4">All direct mutual fund investments are absolutely free - ₹0
                        commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Hero;