import React from 'react';
import { GiTakeMyMoney, GiWallet } from 'react-icons/gi';
import { FaHome, FaShoppingCart } from 'react-icons/fa';


const OverView = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12 bg-secondary shadow p-4 d-flex align-items-center justify-content-start rounded-1">
                        <FaHome className='h4 m-0 text-white me-2' />
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/" className='text-danger h4 m-0'>Dashboard</a></li>
                                <li className="breadcrumb-item active h4 m-0" aria-current="page">Home</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col bg-secondary shadow card border-1 p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <p className='text-white lead m-0 fw-bold'>All Time Profit</p>
                                    <p className='text-muted m-0 text-small'>Total ROI</p>
                                    <p className='text-white lead m-0'>$0</p>
                                    <p className='text-white m-0 text-small'>All Time Profit <span className='text-muted'>than last week  </span></p>
                                </div>
                                <div className="col-3">
                                    <FaShoppingCart className='display-1 m-0 text-danger' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col bg-secondary shadow card border-1 p-4 mx-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <p className='text-white lead m-0 fw-bold lh-1'>Investment Balance</p>
                                    <p className='text-white lead m-0'>$0</p>
                                    <p className='text-white m-0 text-small'>All Time Profit <span className='text-muted'>than last week  </span></p>
                                </div>
                                <div className="col-3">
                                    <GiWallet className='display-1 text-danger m-0' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col bg-secondary card border-1 p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-8">
                                    <p className='text-white lead m-0 fw-bold'>Total Deposit</p>
                                    <p className='text-muted m-0 text-small'>This Week</p>
                                    <p className='text-white lead m-0'>$0</p>
                                    <p className='text-white m-0 text-small'>4% Down <span className='text-muted'>this last week  </span></p>
                                </div>
                                <div className="col-3">
                                    <GiTakeMyMoney className='display-1 m-0 text-danger' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OverView