import React, { Component } from 'react'

export class HeaderButton extends Component {
    render() {
        return (
            <div className="submit text-center">
                <input type="submit" className="btn btn-primary btn-raised btn-round btn-block" value="Enviar" />
            </div>
        )
    }
}

export default HeaderButton
