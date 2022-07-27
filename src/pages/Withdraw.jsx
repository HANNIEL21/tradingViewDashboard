import React from 'react';
import { FaHome, FaPlus } from 'react-icons/fa';

const Withdraw = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12 bg-secondary shadow p-4 d-flex align-items-center justify-content-start rounded-3">
                        <FaHome className='h4 m-0 text-white me-2' />
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/" className='text-danger h4 m-0'>Dashboard</a></li>
                                <li className="breadcrumb-item active h4 m-0" aria-current="page">Withdraw</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col-12">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-4 shadow rounded-3 bg-secondary p-4">
                                    <p className='text-center'>BANK WITHDRAWAL</p>
                                    <hr />
                                    <p className='d-flex justify-content-between'>MINIMUM:  <span className='text-white'>$7000</span></p>
                                    <p className='d-flex justify-content-between'>MAXIMUM: <span className='text-white'>unlimited</span></p>
                                    <p className='d-flex justify-content-between'>CHARGES (%):  <span className='text-white'>10%</span></p>
                                    <p className='d-flex justify-content-between'>DURATION:  <span className='text-white'>24 - 48 hours</span></p>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button className="btn btn-success"> <FaPlus /> Request Withdrawal</button>
                                    </div>
                                </div>
                                <div className="col-4 shadow rounded-3 bg-secondary p-4 mx-3">
                                    <p className='text-center'>CRYPTOCURRENCY WITHDRAWAL</p>
                                    <hr />
                                    <p className='d-flex justify-content-between'>MINIMUM:  <span className='text-white'>$50</span></p>
                                    <p className='d-flex justify-content-between'>MAXIMUM: <span className='text-white'>Infinity</span></p>
                                    <p className='d-flex justify-content-between'>CHARGES (%):  <span className='text-white'>20%</span></p>
                                    <p className='d-flex justify-content-between'>DURATION:  <span className='text-white'>24 - 48 hours</span></p>
                                    <hr />
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button className="btn btn-success"> <FaPlus /> Request Withdrawal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Withdraw