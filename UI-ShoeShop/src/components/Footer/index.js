import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import "./style.css";
import Grid from "antd/lib/card/Grid";

function Footer() {
  return (
    <Grid
      className="container-footer"
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid sm={6} className="text-footer infor " item>
        <div>
          <HomeIcon className="icon-style flex-content" />
          <div>
            <p>Khu Phố 6- Phường linh trung</p>
            <p>Quận Thủ Đức-TPHCM</p>
          </div>
        </div>
        <div>
          <PhoneIcon type="phone" theme="twoTone" className="icon-style" />{" "}
          <span>0981853640</span>{" "}
        </div>
        <div>
          <EmailIcon type="mail" theme="twoTone" className="icon-style" />
          <span>237zjh@gmail.com</span>{" "}
        </div>
      </Grid>
      <Grid sm={6} className="text-footer detail" item>
        <h3 style={{ color: "white" }}>About Group</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </Grid>
      <Grid
        style={{ border: "none" }}
        sm={12}
        direction="row"
        justify="center"
        alignItems="center"
        className="end-footer"
      >
        <div className="end-footer">
          <FacebookIcon className="icon-contact" />
          <YouTubeIcon className="icon-contact" />
          <TwitterIcon className="icon-contact" />
          <InstagramIcon className="icon-contact" />
        </div>
        <div className="text-end">
          <p className="margin-bottom-0">Thank you! I like it and you?</p>
          <p>&copy; luckyStay</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Footer;
