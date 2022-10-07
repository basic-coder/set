import React from 'react'

const Plans = () => {
    return (
        <>
            <div className="plans-container">
                <div className="plans-card">
                    <h2>Choose your plan</h2>
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

                </div>

                <div className="credits-container">
                    
                </div>

            </div>
            <div className="review-container">

            </div>
        </>
    )
}

export default Plans