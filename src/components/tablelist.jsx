import React, { PureComponent } from "react";
import Header from "./header";
import Breadcrumbs from "./breadcrumbs";
import Table from "./table";
import Clearspace from "./clearspace";
import Footer from "./footer";

class Tablelist extends React.Component {
  //    state = {  }
  render() {
    return (
      <div id="right-panel" className="right-panel">
        <Header />
        <Breadcrumbs />
        <Table />
        <Clearspace />
        <Footer />
      </div>
    );
  }
}

export default Tablelist;
