import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineDateRange, MdOutlineSettingsSuggest } from "react-icons/md";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";

const Sidebar = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-secondary rounded-3">
            <div className="nav flex-column nav-pills justify-content-between" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button className="nav-link p-3 mb-3 fw-bold active d-flex justify-content-evenly align-items-center" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                    Home <FaHome className="m-0 h3 text-danger" /> 
                </button>
                <button className="nav-link p-3 mb-4 fw-bold d-flex justify-content-evenly align-items-center" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                    Deposit <GiPayMoney className="m-0 h3 text-danger" /> 
                </button>
                <button className="nav-link p-3 mb-4 fw-bold d-flex justify-content-evenly align-items-center" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false">
                    Withdraw <GiReceiveMoney className="m-0 h3 text-danger" /> 
                </button>
                <button className="nav-link p-3 mb-4 fw-bold d-flex justify-content-evenly align-items-center" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                    Transaction <MdOutlineDateRange className="m-0 h3 text-danger" /> 
                </button>
                <button className="nav-link p-3 fw-bold d-flex justify-content-evenly align-items-center" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                    Settings <MdOutlineSettingsSuggest className="m-0 h3 text-danger" /> 
                </button>
            </div>

        </div>
    )
}

export default Sidebar