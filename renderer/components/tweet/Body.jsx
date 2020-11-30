import PropTypes from 'prop-types'

function Body({ text }) {
  return <p>{text}</p>
}

Body.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Body
