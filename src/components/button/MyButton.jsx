import PropTypes from 'prop-types';
import '/src/assets/css/MyButton.css';
const MyButton = ({ type = "primary", size = "sm", isDisabled = false, children, handleClick }) => {
    const clasName = `btn btn-${type} btn-${size} ${isDisabled ? 'btn-disabled' : ''}`
    return (
        <>
            <button onClick={handleClick} className={clasName}>
                {children}
            </button>
        </>
    );
};
export default MyButton;

MyButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'danger', 'outline', 'link']),
    size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
    isDisabled: PropTypes.bool,
    handleClick: PropTypes.func
};