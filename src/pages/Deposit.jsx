import React from 'react';
import { FaHome } from 'react-icons/fa';

const Deposit = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-12 bg-secondary shadow p-4 d-flex align-items-center justify-content-start rounded-3">
                        <FaHome className='h4 m-0 text-white me-2' />
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0">
                                <li className="breadcrumb-item"><a href="/" className='text-danger h4 m-0'>Dashboard</a></li>
                                <li className="breadcrumb-item active h4 m-0" aria-current="page">Deposit</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col-12 bg-secondary shadow rounded-3 p-4">
                        <form action="">
                            <label className='text-white col-5'>
                                <p className='mb-2 h5'>Give Currency:</p>
                                <div class="input-group">
                                    <input type="text" class="form-control border-danger bg-secondary" placeholder="0" aria-label="input" aria-describedby="basic-addon2" />
                                    <select className='text-muted' id="">
                                        <option className="">USD</option>
                                    </select>
                                </div>
                            </label>
                            <p className='m-0 my-2 text-white fw-bold '>Payment details</p>
                            <label className='text-white col-5'>
                                <p className='mb-2'>Method</p>
                                <select className='col-4 p-2 rounded text-muted' id="">
                                    <option className="">USD</option>
                                </select>
                            </label>
                            <div className="col-12 mt-3">
                                <button className="btn btn-success"> Deposit </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 bg-secondary shadow rounded-3 p-4">
                        <h5 className='text-white'>Deposits</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deposit