import React, { PureComponent } from "react";
import Header from "./header";
import Breadcrumbs from "./breadcrumbs";
import Content from "./content";
import Clearspace from "./clearspace";
import Footer from "./footer";

class Rightpanel extends React.Component {
  //state = {  }
  render() {
    return (
      <div id="right-panel" className="right-panel">
        <Header />
        <Breadcrumbs />
        <Content />
        <Clearspace />
        <Footer />
      </div>
    );
  }
}

export default Rightpanel;
