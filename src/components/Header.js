import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
   
  return (
    <header className='header'>
        <h1 style={ headingStyle }>{title}</h1>
        <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const headingStyle = {
  color: 'steelblue'
}

export default Header

