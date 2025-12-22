import PropTypes from 'prop-types';
const MyInput = ({ label, type = "text", size = "md", placeHolder, isDisabled = false, isReadonly = false, errorMsg, onInputChange, value }) => {

    const baseStyle = 'px-4 m-1 rounded-md border-2 border-gray-300 hover:border-green-300 focus:border-green-500 focus:outline-none';

    const inputSize = {
        sm: "h-8 text-sm",
        md: "h-9 text-base",
        lg: "h-10 text-lg",
    };

    const disabled = isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
    const classLabel = `${inputSize[size]} mr-2`
    const className = `${baseStyle} ${inputSize[size]} ${disabled}`
    return (
        <>
            <label className={classLabel}>{label}</label>
            <input
                className={className}
                type={type}
                readOnly={isReadonly}
                placeholder={placeHolder}
                value={value}
                onChange={onInputChange}
            />
            {errorMsg && <p className="text-red-500">${errorMsg}</p>}
        </>
    );
};

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