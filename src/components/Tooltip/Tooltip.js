import React from 'react'
import './tooltip.css'

class Tooltip extends React.Component{

    render(){
        return(
            <div className="tooltip1">
                {this.props.children}
                <span className="tooltiptext">{this.props.message}</span>
            </div>
        )
    }
}
export default  Tooltip