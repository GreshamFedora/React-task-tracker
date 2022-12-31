import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
   return (
    <button onClick={onClick} className='btn' style = {{color : color}}>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}



