'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}


/**
 * Submit action added
 */
var form = document.getElementById("qform");
function handleForm(event) {
  event.preventDefault();
  const payload = {
    name: event.currentTarget[0].value,
    email: event.currentTarget[1].value,
    phone: event.currentTarget[2].value,
    message: event.currentTarget[3].value,
  }
  let id = new Date().toUTCString();
  firebase
  .database()
  .ref("contactme/" + id)
  .set({
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    message:payload.message
  });

  const emailBody=`<!doctype html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <title>
      </title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style type="text/css">
        #outlook a{padding: 0;}
              .ReadMsgBody{width: 100%;}
              .ExternalClass{width: 100%;}
              .ExternalClass *{line-height: 100%;}
              body{margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}
              table, td{border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
              img{border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic;}
              p{display: block; margin: 13px 0;}
      </style>
      <!--[if !mso]><!-->
      <style type="text/css">
        @media only screen and (max-width:480px) {
                    @-ms-viewport {width: 320px;}
                    @viewport {	width: 320px; }
                }
      </style>
      <!--<![endif]-->
      <!--[if mso]> 
      <xml> 
        <o:OfficeDocumentSettings> 
          <o:AllowPNG/> 
          <o:PixelsPerInch>96</o:PixelsPerInch> 
        </o:OfficeDocumentSettings> 
      </xml>
      <![endif]-->
      <!--[if lte mso 11]> 
      <style type="text/css"> 
        .outlook-group-fix{width:100% !important;}
      </style>
      <![endif]-->
      <style type="text/css">
        @media only screen and (min-width:480px) {
        .dys-column-per-60 {
          width: 60% !important;
          max-width: 60%;
        }
        .dys-column-per-40 {
          width: 40% !important;
          max-width: 40%;
        }
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (max-width:480px) {
        
                table.full-width-mobile { width: 100% !important; }
                td.full-width-mobile { width: auto !important; }
        
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
        @media only screen and (min-width:480px) {
        .dys-column-per-100 {
          width: 100.000000% !important;
          max-width: 100.000000%;
        }
        }
      </style>
    </head>
    <body>
      <div>
        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#30373b;background-color:#30373b;width:100%;'>
          <tbody>
            <tr>
              <td>
                <div style='margin:0px auto;max-width:600px;'>
                  <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
                    <tbody>
                      <tr>
                        <td style='direction:ltr;font-size:0px;padding:2px;text-align:center;vertical-align:top;'>
                          <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:360px;">
  <![endif]-->
                          <div class='dys-column-per-60 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                              <tr>
                                <td align='left' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                                  <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:left;text-decoration:none;'>
                                    Greetings from Shaikh Saifuddin
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <!--[if mso | IE]>
  </td><td style="vertical-align:top;width:240px;">
  <![endif]-->
                          <div class='dys-column-per-40 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                              <tr>
                                <td align='right' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                                  <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:right;text-decoration:none;'>
                                    <a href='http://devsaif.web.app/#contact' style='text-decoration:underline; color:#848789;' target='_blank'>
                                      contact me
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <div style='color:#feae39;font-family:Open Sans, Arial, sans-serif;font-size:18px;font-weight:bold;line-height:20px;text-align:center;text-transform:uppercase;'>
                            Thanks for Contacting Me
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td align='center' style='font-size:0px;padding:10px 25px;padding-top:20px;word-break:break-word;'>
                          <div style='color:#feae39;font-family:Courier New, Arial, sans-serif;font-size:50px;line-height:50px;text-align:center;text-transform:uppercase;'>
                            <em>
                              I will Get back to you Shortly
                            </em>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:600px;" width="600"><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
        <div style='margin:0px auto;max-width:600px;'>
          <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
            <tbody>
              <tr>
                <td style='direction:ltr;font-size:0px;padding:20px 0;text-align:center;vertical-align:top;'>
                  <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                  <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='vertical-align:top;' width='100%'>
                      <tr>
                        <td align='center' style='font-size:0px;padding:10px 25px;word-break:break-word;'>
                          <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='border-collapse:collapse;border-spacing:0px;'>
                            <tbody>
                              <tr>
                                <td style='width:333px;'>
                                  <img alt='Welcome!' height='303' src='https://devsaif.web.app/assets/images/hero-banner.png' style='border:0;display:block;font-size:13px;height:303px;outline:none;text-decoration:none;width:100%;' width='333' />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
        <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='background:#30373b;background-color:#30373b;width:100%;'>
          <tbody>
            <tr>
              <td>
                <div style='margin:0px auto;max-width:600px;'>
                  <table align='center' border='0' cellpadding='0' cellspacing='0' role='presentation' style='width:100%;'>
                    <tbody>
                      <tr>
                        <td style='direction:ltr;font-size:0px;padding:2px;text-align:center;vertical-align:top;'>
                          <!--[if mso | IE]>
  <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:top;width:600px;">
  <![endif]-->
                          <div class='dys-column-per-100 outlook-group-fix' style='direction:ltr;display:inline-block;font-size:13px;text-align:left;vertical-align:top;width:100%;'>
                            <table border='0' cellpadding='0' cellspacing='0' role='presentation' width='100%'>
                              <tbody>
                                <tr>
                                  <td style='padding:10px;vertical-align:top;'>
                                    <table border='0' cellpadding='0' cellspacing='0' role='presentation' style='' width='100%'>
                                      <!-- Footer Content -->
                                      <tr>
                                        <td align='center' style='font-size:0px;padding:5px;word-break:break-word;'>
                                          <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:center;text-transform:uppercase;'>
                                            <a href='# Privacy' style='text-decoration:underline; color:#848789;' target='_blank'>
                                              PRIVACY STATEMENT
                                            </a>
                                            &nbsp;&nbsp;|&nbsp;&nbsp;
                                            <a href='# TOS' style='text-decoration:underline; color:#848789;' target='_blank'>
                                              TERMS OF SERVICE
                                            </a>
                                            &nbsp;&nbsp;
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align='center' style='font-size:0px;padding:5px;word-break:break-word;'>
                                          <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:center;text-transform:uppercase;'>
                                            ©2‌022 All Rights Reserved.
                                          </div>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align='center' style='font-size:0px;padding:5px;word-break:break-word;'>
                                          <div style='color:#848789;font-family:Open Sans, Arial, sans-serif;font-size:12px;line-height:18px;text-align:center;text-transform:uppercase;'>
                                            If you do not wish to receive any further emails from us, please
                                            <span style='text-decoration:underline;'>
                                              <a href='#' style='text-decoration:underline; color:#848789;' target='_blank'>
                                                unsubscribe
                                              </a>
                                            </span>
                                          </div>
                                        </td>
                                      </tr>
                                      <!-- End Footer Content -->
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!--[if mso | IE]>
  </td></tr></table>
  <![endif]-->
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>`
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "shaikhsaifuddin1@gmail.com",
    Password : "BE7BDC652838963CB8DAF15C9681153C7139",
    To : payload.email,
    From : "shaikhsaifuddin1@gmail.com",
    Subject : "Thanks for Contacting !!!",
    Body :  emailBody
}).then(
  message =>{
     alert("Your Response has been Taken Will receive email please check spam also.");
     form.reset();
  }
);
}
form.addEventListener('submit', handleForm);