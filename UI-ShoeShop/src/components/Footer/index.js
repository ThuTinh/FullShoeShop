import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import "./style.css";


function Footer() {
  return (
    <div className = "container-footer">
    <div className="container-contact-footer">
      <div className="text-footer infor ">
        <div className = "contact-item">
          <HomeIcon className="icon-style " />
          <p>Khu Phố 6- Phường linh trung Quận Thủ Đức-TPHCM </p>
        </div>
        <div  className = "contact-item">
          <PhoneIcon type="phone" theme="twoTone" className="icon-style " />{" "}
          <span>0981853640</span>{" "}
        </div>
        <div  className = "contact-item">
          <EmailIcon type="mail" theme="twoTone" className="icon-style " />
          <span>237zjh@gmail.com</span>{" "}
        </div>
      </div>
      <div className="text-footer">
        <h3 style={{ color: "white" }}>About Group</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,x f
        </p>
      </div>
    </div>
     <div className="container-end-footer">
     <div className="end-footer">
       <FacebookIcon className="icon-contact" />
       <YouTubeIcon className="icon-contact" />
       <TwitterIcon className="icon-contact" />
       <InstagramIcon className="icon-contact" />
     </div>
     <div className="text-end">
       <p className="margin-bottom-0">Thank you! I like it and you?</p>
       <p>&copy; Shoe Shop</p>
     </div>
   </div>
   </div>
  );
}

export default Footer;
