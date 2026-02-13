import React from 'react';
function Education() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <img style={{width:"90%"}} src='/media/images/images/education.svg'/>
                </div>

                <div className="col-6 mt-5">
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, the largest online stock market education book in the world
                    covering everything from basics to advanced trading.</p>
                    <a style={{textDecoration:"none"}} href=''>See pricing <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>

                    <p className='mt-5'>Trading Q&A, the most active trading and investment community in India 
                    for all
                    </p>
                    <a style={{textDecoration:"none"}} href=''>See pricing <i className='fa fa-long-arrow-right' aria-hidden="true"></i> </a>

                </div>
            </div>
        </div>
    );
}

export default Education;