import React from 'react'

import "./style.css";

function CommTypeSelect(props) {
    return (
        <div>
            <h4 id="modal-title">How would you like to connect?</h4>

            <div className="row">

                <div className="col-md-6">
                    <button id="smsBtn" className="btn btn-xl btn-block" onClick={() => props.clickAction("sms")}>
                        <p>SMS (preferred)</p>
                        <i className="far fa-comment-alt"></i>
                    </button>
                </div>

                <div className="col-md-6">
                    <button id="emailBtn" className="btn btn-xl btn-block" onClick={() => props.clickAction("email")}>
                        <p>Email</p>
                        <i className="far fa-envelope-open"></i>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default CommTypeSelect;
