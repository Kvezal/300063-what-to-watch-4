import * as React from "react";

import Logo from "@components/logo/logo";


const Footer = () => {
  return <footer className="page-footer">
    <Logo linkClass={{"logo__link--light": true}}/>
    <div className="copyright">
      <p>© 2019 What to watch Ltd.</p>
    </div>
  </footer>;
};

export default Footer;
