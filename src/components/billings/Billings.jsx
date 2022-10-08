import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Plans from '../plans/Plans'
import './billings.css'

const Billings = () => {

  const [toggle, setToggle] = useState(true)

  return (
    <>
    {
      toggle == true ? (
        <div className="billings-container">
        <div className="credit-container">
          <h4>Available credits</h4>
          <div className="credit-boxes">
            <div className="credit-box active">
              <h5>Total Credits</h5>
              <h4>20,000</h4>
            </div>
            <div className="credit-box">
              <h5>Plan Credits</h5>
              <h4>20,000</h4>
            </div>
            <div className="credit-box">
              <h5>Bonus Credits</h5>
              <h4>0</h4>
            </div>
          </div>
        </div>
        <div className="subcription-container">
          <h4>Subcription</h4>
          <div className="plan-container">
            <p>20,000 words credits on</p>
            <h3>Starter</h3>
            <span>ACTIVE</span>
          </div>
          <p className="cycle-text">Billing cycle renews in 29 days</p>
          <div className="edit-btns">
            <Link className='edit-payment-btn' to='/stripe'>Edit payment details</Link>
            <button className='edit-plan-btn' onClick={()=>setToggle('false')}>Edit plan</button>
          </div>
          <div className="upgrade-box">
            <h3>If I go over my plan limit of the month</h3>
            <select name="" id="" placeholder='Upgrade account to the next tier chapter per word'>
              <option value="">Upgrade account to the next tier chapter per word</option>
            </select>
          </div>
        </div>

        <div className="free-container">
          <div className="free-left">
            <h3>Get 2 months free</h3>
            <p>Pay annually to get 2 months free</p>
          </div>
          <div className="free-right">
            <button className='view-btn'>View More</button>
          </div>
        </div>

        <div className="invoice-container">
          <div className="invoice-left">
            <h3>Invoices</h3>
            <p>View your payment history</p>
          </div>
          <div className="invoice-right">
            <button className='view-btn'>View billing history</button>
          </div>
        </div>

        <div className="cancel-container">
          <h3>Cancel Account</h3>
          <p>Please be aware that cancelling your account will cause you to lose all of the save content and earned credit of the account.</p>
          <button>Cancel Account</button>
        </div>

      </div>
      ) : (<Plans />)
    }
    
    </>
  )
}

export default Billings