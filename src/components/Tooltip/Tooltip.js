import React from 'react'
import './tooltip.css'

class Tooltip extends React.Component{

    render(){
        return(
            <div className="qa-tooltip">
                {this.props.children}
                <span className="qa-tooltip-text">{this.props.message}</span>
            </div>
        )
    }
}
export default  Tooltip