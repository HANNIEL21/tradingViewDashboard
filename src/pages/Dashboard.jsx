import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Deposit from './Deposit'

import OverView from "./OverView"
import Transaction from './Transaction'
import Withdraw from './Withdraw'

const Dashboard = () => {
  return (
    <div className='bg-primary min-vh-100'>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2" style={{ minHeight: "400px" }}>
              <Sidebar />
            </div>
            <div className="col-10 px-4">
              <div class="tab-content" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                  <OverView />
                </div>
                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                  <Deposit />
                </div>
                <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">
                  <Withdraw />
                </div>
                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">
                  <Transaction />
                </div>
                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard