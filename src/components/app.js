import React from 'react';
// import ReactDOM from 'react-dom';
import '../../src/App.css'
import $ from 'jquery';
// import AppBar from '@material-ui/core/AppBar'
import FormFields from './form-fields';
import NavBar from './nav-bar';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default class App extends React.Component {

  // function sendEmail(e) {
  //   console.log('api called');
  // e.preventDefault();
  // console.log('success');
  // var URL = "https://e36k6c81va.execute-api.us-east-1.amazonaws.com/prod/submit";

  // var Namere = /[A-Za-z]{1}[A-Za-z]/;
  // if (!Namere.test($("#name-input").val())) {
  //   alert("Name can not less than 2 char");
  //   return;
  // }
  // var mobilere = /[0-9]{10}/;
  // if (!mobilere.test($("#phone-input").val())) {
  //   alert("Please enter valid mobile number");
  //   return;
  // }
  // if ($("#email-input").val() == "") {
  //   alert("Please enter your email id");
  //   return;
  // }

  // var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
  // if (!reeamil.test($("#email-input").val())) {
  //   alert("Please enter valid email address");
  //   return;
  // }

  // var name = $("#name-input").val();
  // var phone = $("#phone-input").val();
  // var email = $("#email-input").val();
  // var desc = $("#description-input").val();
  // var data = {
  //   name: name,
  //   phone: phone,
  //   email: email,
  //   desc: desc
  // };

  // $.ajax({
  //   type: "POST",
  //   url: "https://e36k6c81va.execute-api.us-east-1.amazonaws.com/prod",
  //   dataType: "json",
  //   crossDomain: "true",
  //   contentType: "application/json; charset=utf-8",
  //   data: JSON.stringify(data),


  //   success: function () {
  //     // clear form and show a success message
  //     alert("Successfull");
  //     document.getElementById("contact-form").reset();
  //     // location.reload();
  //   },
  //   error: function () {
  //     // show an error message
  //     alert("UnSuccessfull");
  //   }
  // });
// }

sendEmail(e){
  console.log('sendEmail:', e);
}

  render(){
    return(
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <NavBar />
          <FormFields sendEmail={this.sendEmail}/>
        </Container>
      </React.Fragment>
        /* <AppBar title="Contact Form" /> */
        // <Header />
      );
    }
  }

    /* <form id="contact-form" method="post">
      <div class="form-group">
        <h4>Name:</h4>
        <input type="text" id="name-input" placeholder="Name..." class="form-control" />
      </div>
      <div class="form-group">
        <h4>Phone:</h4>
        <input type="phone" id="phone-input" placeholder="Phone..." class="form-control" />
      </div>
      <div class="form-group">
        <h4>Email:</h4>
        <input type="email" id="email-input" placeholder="Email..." class="form-control" />
      </div>
      <div class="form-group">
        <h4>Message:</h4>
        <textarea id="description-input" rows="3" placeholder="Message…" class="form-control" ></textarea>
      </div>
      <div class="g-recaptcha" data-sitekey="YOUR_GOOGLE_RECAPTCHA_KEY" class="form-control"></div>
      <button type="submit" onClick="submitToAPI(event)" class="btn btn-primary">Submit</button>
    </form> */
