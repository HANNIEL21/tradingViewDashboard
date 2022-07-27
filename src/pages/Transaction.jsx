import React from 'react';
import { FaHome } from 'react-icons/fa';
import { GiPayMoney, GiMoneyStack, GiProfit } from 'react-icons/gi'

const Transaction = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12 bg-secondary shadow p-4 d-flex align-items-center justify-content-start rounded-3">
                        <FaHome className='h4 m-0 text-white me-2' />
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/" className='text-danger h4 m-0'>Dashboard</a></li>
                                <li className="breadcrumb-item active h4 m-0" aria-current="page">Transaction</li>
                            </ol>
                        </nav>
                    </div>

                    <div className="col bg-secondary shadow card border-1 p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 me-2">
                                    <GiMoneyStack className='display-1 m-0 text-danger' />
                                </div>

                                <div className="col-8 text-end">
                                    <p className='text-white lead m-0 fw-bold'>NET INCOME</p>
                                    <p className='text-white lead m-0'>$0</p>
                                    <p className='text-white m-0'>LEVEL:  <span className='text-info'> LEVEL 1 </span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col bg-secondary shadow card border-1 p-4 mx-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 me-2">
                                    <GiProfit className='display-1 text-danger m-0' />
                                </div>

                                <div className="col-8 text-end">
                                    <p className='text-white lead m-0 fw-bold lh-1'>TOTAL PROFIT</p>
                                    <p className='text-white lead m-0'>$0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col bg-secondary card border-1 p-4">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 me-2">
                                    <GiPayMoney className='display-1 m-0 text-danger rotate' />
                                </div>

                                <div className="col-8 text-end">
                                    <p className='text-white lead m-0 fw-bold'>TOTAL DEPOSIT</p>
                                    <p className='text-white lead m-0'>$0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 bg-secondary rounded-3 shadow p-4">
                        <h3 className='text-danger'>Transactions</h3>
                        <div className="container-fluid">
                            <div className="row">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">S/N</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">Method</th>
                                            <th scope="col">Type</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>2022-07-15</td>
                                            <td>18:38:15</td>
                                            <td>Bank</td>
                                            <td>Withdrawal</td>
                                            <td>Pending</td>
                                            <td>$2000.00</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>2022-02-12</td>
                                            <td>08:38:15</td>
                                            <td>BitCoin</td>
                                            <td>Deposit</td>
                                            <td>Completed</td>
                                            <td>$4000.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Transaction