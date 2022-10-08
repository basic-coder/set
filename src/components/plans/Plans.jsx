import React from 'react'
import './plans.css'

const Plans = () => {
    return (
        <>
            <div className="plans-container">
                <div className="plans-left">
                    <div className="plans-card">
                        <h3>Choose your plan</h3>
                        <div className="plans-options">
                            <div className="plan-option">
                                <div className="plan-option-box">
                                    <div className="plan-option-title">
                                        <input type="radio" name="plan" id="" /><h4>Boss Mode</h4>
                                    </div>
                                    <div className="plan-option-details">
                                        <h5>Everything in the starter plan + powerfull tools for writing full length content (like blog posts) with added controls and flexibility</h5>
                                        <div className="plan-options-benefits">
                                            <p>Compose and Command features</p>
                                            <p>Google docs and style editor</p>
                                            <p>Maximum content look-back</p>
                                            <p>increased limit on templete</p>
                                            <p>Grows with our team</p>
                                            <p>Support Chat</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="plan-option-price">
                                    <div className="plan-option-price-text">
                                        STARTS AT
                                    </div>
                                    <div className="plan-option-pricing">
                                        $59 <span>/mo</span>
                                    </div>
                                </div>
                            </div>
                            <div className="plan-option">
                                <div className="plan-option-box">
                                    <div className="plan-option-title">
                                        <input type="radio" name="plan" id="" /><h4>Starter</h4>
                                    </div>
                                    <div className="plan-option-details">
                                        <h5>Access to all basic templete</h5>
                                        <div className="plan-options-benefits">
                                            <p>Compose and Command features</p>
                                            <p>Google docs and style editor</p>
                                            <p>Maximum content look-back</p>
                                            <p>increased limit on templete</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="plan-option-price">
                                    <div className="plan-option-price-text">
                                        STARTS AT
                                    </div>
                                    <div className="plan-option-pricing">
                                        $29 <span>/mo</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="plan-continue">
                            <button>Continue</button>
                        </div>

                    </div>

                    <div className="credits-container">
                        <h3>Adjust Credits</h3>
                        <span>Edit</span>
                    </div>
                </div>
                <div className="review-container">
                <div className="review-header">
                    <span>Bill annually</span>
                    <span>Bill monthly</span>
                </div>
                <div className="review-card">
                    <h3 className='review-card-title'>Review Changes</h3>
                    <span className='review-card-text'>Pay anually & get 3 months free</span>
                    <div className="review-boxes">
                        <div className="review-box">
                            <div className="review-box-left">
                            <h3 className="review-box-title">PLAN TYPE</h3>
                            <h4 className="review-box-text">Starter</h4>
                            </div>

                            <div className="review-box-right">
                                <span>$29/mon</span>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-left">
                            <h3 className="review-box-title">Credits</h3>
                            <h4 className="review-box-text">29,000/mon</h4>
                            </div>

                            <div className="review-box-right">
                                <span>included</span>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-left">
                            <h3 className="review-box-title">Total</h3>
                            </div>

                            <div className="review-box-right">
                                <span>$29/mon</span>
                            </div>
                        </div>
                        <div className="review-box">
                            <div className="review-box-left">
                            <h3 className="end-review-box-title">Due Today</h3>
                            </div>

                            <div className="end-review-box-right">
                                <span>$0</span>
                            </div>
                        </div>

                        <button className='review-confirm'>
                            Confirm Changes
                        </button>
                    </div>
                </div>

                <h4 className="payment-text"> Payments are secured by stripe</h4>
            </div>

            </div>

        </>
    )
}

export default Plans