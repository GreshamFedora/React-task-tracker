import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  const onClickFunction = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
        <h1 style={ headingStyle }>{title}</h1>
        <Button color="green" text='Hello' onClick={onClickFunction}/>
        <Button color="steelblue" text='Hey' onClick={onClickFunction}/>
        <Button color="purple" text='Add' onClick={onClickFunction}/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

const headingStyle = {
  color: 'red', backgroundColor: 'black'
}

export default Header

