import React, { PureComponent } from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps')
    //     return state
    // }

    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps') 
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate') 
    //     return  nextProps.persons !== this.props.persons ||
    //             nextProps.clicked !== this.props.clicked ||
    //             nextProps.changed !== this.props.changed
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate') 
        return { message: 'Snapshot!' }
    }

    // componentWillUpdate() {
    //     console.log('[Persons.js] componentWillUpdate') 
    // }

    componentDidUpdate(prevProps, prevState, snaspshot) {
        console.log('[Persons.js] componentDidUpdate') 
        console.log(snaspshot)
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount') 
    }

    render() {
        console.log('[Persons.js] rendering...')

        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                isAuth = {this.props.isAuthenticated}
            />
        })
    }
}

export default Persons