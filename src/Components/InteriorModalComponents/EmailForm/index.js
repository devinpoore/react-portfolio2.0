import React from "react";

import api from "../../../api/api.js";

import "./style.css";

class EmailForm extends React.Component {
    state = {
        contactName: "",
        emailAddress: "",
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

    sendEmail = (event) => {
        event.preventDefault();

        const newEmailObj = {
            name: this.state.contactName,
            email: this.state.emailAddress,
            body: this.state.messageBody
        }

        // console.log(newEmailObj);
        api.sendEmail(newEmailObj).then(serverRes => {
            if (serverRes.status === 200) {
                this.setState({ messageSent: true });
            }
        }).catch(err => console.log(err));
    }
    
    render() {
        if (this.state.messageSent) {
            return (
                <div className="text-center">
                    <button id="emailBackBtn" className="btn btn-sm" onClick={() => this.state.back()}><i id="emailArrow" className="fas fa-arrow-left"></i></button>
                    <h3>Email Sent!</h3>
                    <h5>Thanks for reaching out <span role="img" aria-label="smiley-emoji">😃</span></h5>
                </div>
            )
        }
        return (
            <div>
                <button id="emailBackBtn" className="btn btn-sm" onClick={() => this.state.back()}><i id="emailArrow" className="fas fa-arrow-left"></i></button>
                <h4 id="emailHeader">Email Form</h4>
                {/* <hr /> */}
    
                <form>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="nameInput">Name</label>
                                <input name="contactName" value={this.state.contactName} onChange={this.handleInputChange} id="nameInput" placeholder="Legolas"/>
                            </div>
                            
                            <div className="col-md-6">
                                <label htmlFor="emailInput">Email Address</label>
                                <input name="emailAddress" value={this.state.emailAddress} onChange={this.handleInputChange} id="emailInput" placeholder="shieldsurfer@mirkwood.com"/>
                            </div>
                        </div>
                    </div>
    
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea name="messageBody" value={this.state.messageBody} onChange={this.handleInputChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="They're taking the hobbits to Isengard!"></textarea>
                    </div>
    
                    <button id="sendEmail" type="submit" className="btn btn-md btn-block" onClick={this.sendEmail}>SEND</button>
                </form>
            </div>
        )
    }
}

export default EmailForm;
