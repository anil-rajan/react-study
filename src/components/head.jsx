import React, { PureComponent } from "react";
class Header extends React.Component {
  //  state = {  }
  render() {
    return (
      <React.Fragment>
        <link rel="apple-touch-icon" href="https://i.imgur.com/QRAUqs9.png" />
        <link rel="shortcut icon" href="https://i.imgur.com/QRAUqs9.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.0/normalize.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/pixeden-stroke-7-icon@1.2.3/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.0/css/flag-icon.min.css"
        />
        <link rel="stylesheet" href="assets/css/cs-skin-elastic.css" />
        <link rel="stylesheet" href="assets/css/style.css" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
      </React.Fragment>
    );
  }
}

export default Header;
