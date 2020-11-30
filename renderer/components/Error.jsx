import PropTypes from 'prop-types'

function Error({ errors }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <p>{`ERROR: ${errors && errors.length ? errors[0].message : ''}`}</p>
    </div>
  )
}

Error.propTypes = {
  errors: PropTypes.arrayOf.isRequired,
}

export default Error
