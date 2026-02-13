import React from 'react';
function Stats() {
    return (
        <div className=" mt-5 container">
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className='fs-2 mb-5'>Trust with confidence</h1>
                    <h2 className='fs-4'>Customer-first always</h2>
                    <p className='text-muted'>That's why variety of customers trust us with ₹3.5+
                        lakh crores worth of equity investments.</p>

                    <h2 className='fs-4'>No spam or gimmicks</h2>
                    <p className='text-muted'>We believe in complete transparency and honest communication. No hidden charges,
                    no misleading promises — just straightforward services designed to help you invest with confidence.</p>

                    <h2 className='fs-4'>The Penny Wise universe</h2>
                    <p className='text-muted'>Explore a complete ecosystem of smart financial tools, insights, and investment options, all thoughtfully designed to
                    simplify your journey and help you make informed money decisions.</p>

                    <h2 className='fs-4'>Do better with money</h2>
                    <p className='text-muted'>Build smarter financial habits with expert guidance, data-driven insights,
                    and easy-to-use platforms that empower you to grow, manage, and protect your wealth effectively.</p>
                </div>
                <div className="col-6 p-5">
                    <img style={{width:"80%"}} src='/media/images/images/ecosystem.png'/>
                    <div className='text-center'>
                        <a style={{textDecoration:"none"}} href=''className='mx-5'>Explore our products  <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>
                        <a style={{textDecoration:"none"}} href=''>Try kite demo <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;