import React from 'react';
function Footer() {
    return (
        <footer style={{backgroundColor:"rgb(240,240,240)"}}>
        <div className="container border-top mt-5" >
            <div className="row mt-5">
                <div className="col">
                    <img src='/media/images/images/logo2.png' style={{width:"50%"}}/>
                    <p>&copy; 2026, PennyWise Ltd. All rights reserved</p>
                </div>
                <div className="col">
                    <p>Company</p>
                        <a style={{textDecoration:"none"}} href=''>About </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Products </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Pricing </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Pricing </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Referral programme </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Careers </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>PennyWise.tech </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Press & media </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>PennyWise cares (CSR) </a> <br/>
                </div>
                <div className="col">
                    <p>Support</p>
                        <a style={{textDecoration:"none"}} href=''>Contact </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Support portal </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Z-Connect blog  </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>List of charges </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Downloads & resources </a> <br/>
                </div>
                <div className="col">
                    <p>Account</p>
                        <a style={{textDecoration:"none"}} href=''>Open an account </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>Fund transfer </a> <br/>
                        <a style={{textDecoration:"none"}} href=''>60 day challenge </a> <br/>
                </div>
            </div>
            <div className="mt-5 text-small text-muted">
                <p>
                    By accessing and using PennyWise, you agree to comply with these Terms and Conditions. You must be at least 18 years old and legally capable of entering into binding agreements to use our platform. By creating an account, you confirm that all information provided is accurate and complete.
                    PennyWise provides a digital platform for stock trading, investment tools, and financial insights. All investments are subject to market risks, and we do not guarantee profits or protection against losses. Users are solely responsible for their investment decisions and trading activities.
                </p>
                <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account. PennyWise reserves the right to suspend or terminate accounts that engage in fraudulent, unlawful, or suspicious activities, or that violate applicable regulations.
                </p>
                <p>PennyWise is not liable for any direct or indirect losses arising from market fluctuations, technical interruptions, or third-party service failures. We may update these Terms and Conditions at any time, and continued use of the platform constitutes acceptance of the revised terms.
                </p>
            </div>
        </div>
    </footer>
    );
}

export default Footer;