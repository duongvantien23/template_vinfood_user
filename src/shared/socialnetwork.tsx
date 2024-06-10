import React from "react";
import "../assets/stylepages/social.css"
import logophone from '../assets/images/logo/logophone.jpg';
import logozalo from '../assets/images/logo/Logo-Zalo-App-Rec.webp';
import logomess from '../assets/images/logo/logo_messeger.png';

const Social = function() {
  return (
    <>
      <section className="c-0 m-1">
        <ul
          id="social_widgets_right"
          className="scroll_group unstyled hidden-xs hidden-sm show"
        >
          <li>
            <a
              href="tel:0399269728"
              className="social-wrapper scroll_hotline"
            >
              <span className="social-icon">
                <img src={logophone} alt="Anhr logo phone" title="Mobile" />
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="//zalo.me/abc"
              className="social-wrapper scroll_zalo"
            >
              <span className="social-icon">
                <img src={logozalo} alt="Zalo" title="Chat Zalo"/>
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100032160095356"
              className="social-wrapper scroll_fb"
            >
              <span className="social-icon">
               <img src={logomess} alt="" title="Chat Messenger" />
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
export default Social;
