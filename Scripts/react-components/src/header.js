import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <div id='header-returnLink'>
                    <a href="/API/SwaggerUi/ReturnToPlatformManager">Return to Platform Manager</a>
                </div>
                <div id='header-image'></div>
                <div id='header-divider'></div>
                <HeaderButton></HeaderButton>
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
      <Header />
    </React.StrictMode>,
    document.getElementById('header')
  );
