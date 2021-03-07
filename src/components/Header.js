//impt to import prop types
import PropTypes from 'prop-types'
import Button from './Button'
//rafce to create a react arrow function
const Header = ({title}) => {
    const onClick=(e)=>{
        console.log(e);
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color='green' text='Add task' onClick={onClick}/>
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
// const headerStyle={
//     color:'red',
//     backgroundColor:'black'
// }

export default Header



