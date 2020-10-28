import React, { Component } from 'react'
import PropTypes from 'prop-types'

import classes from './Person.css'
import withClass from '../../../hoc/withClass'
import Auxiliary from '../../../hoc/Auxiliary'
import AuthContext from '../../../context/auth-context'

// const StyledDiv = styled.div`
//     width: 60%;
//     margin: 16px auto;
//     @media (min-width: 500px) {
//     width: '450px'
//     }
// `

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        // document.querySelector('input').focus
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }
    render() {
        console.log('[Person.js] rendering...')

        return (
            // <React.Fragment></React.Fragment>
            <Auxiliary> 
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please login!</p>}

                <p onClick={this.props.click} >
                    I'm {this.props.name} and I'm {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    // ref={ (inputEl) => {this.inputEl = inputEl} }
                    ref = {this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxiliary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person)
