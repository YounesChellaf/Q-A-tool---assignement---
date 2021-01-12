import React from 'react'
import {AppBar, Toolbar} from '@material-ui/core'

import './Header.css'

class Header extends React.Component{

    render(){
        return(
            <AppBar position='fixed' className="app-bar" color='inherit'>
                <Toolbar className='tool-bar'>
                    <h3>Studocu Awesome QA</h3>
                </Toolbar>

            </AppBar>
        )
    }
}
export default  Header