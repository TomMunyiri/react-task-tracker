//impt to import prop types
import PropTypes from 'prop-types'
//rafce to create a react arrow function
const Header = ({title}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <button className="btn">Add</button>
        </header>
    )
}

//default props
Header.defaultProps={
    title:'Task Tracker',
}

//prop types help code to be more robust
//optionally use TS
Header.propTypes={
    title:PropTypes.string.isRequired,
}

//in file css styling
const headerStyle={
    color:'red',
    backgroundColor:'black'
}

export default Header



