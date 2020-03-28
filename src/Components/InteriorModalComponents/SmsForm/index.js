import React from 'react';

import api from "../../../api/api.js";

import "./style.css";

class SmsForm extends React.Component {
    state = {
        contactName: "",
        smsNumber: "",
        messageBody: "",
        back: this.props.back,
        messageSent: false
    }

    //
    handleInputChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    sendSms = (event) => {
        event.preventDefault();

        const newSmsObj = {
            name: this.state.contactName,
            sms: this.state.smsNumber,
            body: this.state.messageBody
        }

        // console.log(newSmsObj);
        api.sendSms(newSmsObj).then(serverRes => {
            if (serverRes.status === 200) {
                this.setState({ messageSent: true });
            }
        }).catch(err => console.log(err));
    }
    
    
    render() {
        if (this.state.messageSent) {
            return (
                <div className="text-center">
                    <button id="backBtn" className="btn btn-sm" onClick={() => this.state.back()}><i id="emailArrowSMS" className="fas fa-arrow-left"></i></button>
                    <h3>SMS Sent!</h3>
                    <h5>Thanks for reaching out <span role="img" aria-label="smiley-emoji">😃</span></h5>
                </div>
            )
        }
        return (
            <div>
    
                <button id="backBtn" className="btn btn-sm" onClick={() => this.state.back()}><i className="fas fa-arrow-left"></i></button>
                <h4 id="smsHeader">SMS Form</h4>
                {/* <hr /> */}
    
                <form>
    
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="nameInput">Name</label>
                                <input name="contactName" value={this.state.contactName} onChange={this.handleInputChange} id="nameInput" placeholder="Geralt of Rivia"/>
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="smsInput">SMS Capable Phone #</label>
                                <input name="smsNumber" value={this.state.smsNumber} onChange={this.handleInputChange} id="smsInput" placeholder="800-WHT-WOLF"/>
                            </div>
                        </div>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea name="messageBody" value={this.state.messageBody} onChange={this.handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Hmm..."></textarea>
                    </div>
    
                    <button type="submit" className="btn btn-md btn-block smsSend" onClick={this.sendSms}>SEND</button>
    
                </form>
    
            </div>
        )
    }
};

export default SmsForm;
