import PropTypes from 'prop-types';
const MyInput = ({ label, type = "text", size = "md", placeHolder, isDisabled = false, isReadonly = false, errorMsg, onInputChange, value }) => {
    const classInputName = `my-input my-input-${size} ${isDisabled ? 'my-input-disabled' : ''} ${isReadonly ? 'readonly' : ''}`
    return (
        <>
            <label className={`label-${size}`}>{label}</label>
            <input
                className={classInputName}
                type={type}
                placeholder={placeHolder}
                value={value}
                onChange={onInputChange}
            />
            {errorMsg && <p className='my-input-error'>${errorMsg}</p>}
        </>
    );
}
MyInput.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    placeHolder: PropTypes.string,
    isDiabled: PropTypes.bool,
    isReadonly: PropTypes.bool,
    errorMsg: PropTypes.string,
    onInputChange: PropTypes.func,
    value: PropTypes.string
}
export default MyInput;