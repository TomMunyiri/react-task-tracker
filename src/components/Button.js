import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {
    return (
        <button style={{background:color}} className="btn" onClick={onClick}>{text}</button>
    )
}

Button.defaultProps={
    color:'steelblue'
}

Button.protoTypes={
    text:PropTypes.string,
    color:PropTypes.string,
    onClick:PropTypes.func,
}

export default Button