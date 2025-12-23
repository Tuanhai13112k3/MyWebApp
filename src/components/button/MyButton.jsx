import PropTypes from 'prop-types';

/**
 * @property {string} [type] - Kiểu input (text, password...)
 * @property {'sm' | 'md' | 'lg'} [size='md'] - Kích thước input (Gợi ý sẽ hiện ở đây)
 * @property {boolean} [isDisabled]
 * @property {<|>} [children]
 * @property {function} [handleClick]
 */

/**
 * Component Button tùy chỉnh
 * @type {React.FunctionComponent<{
 *  type?: string,
 *  size?: string,
 *  isDisabled?: boolean,
 *  children?: React.ReactNode,
 *  handleClick?: function
 * }>}
 */
const MyButton = ({ type = "primary", size = "sm", isDisabled = false, children, handleClick }) => {

    const baseStyle = " flex items-center justify-center rounded-[4px]  px-4 ease-in-out transition-all duration-[300s]"

    const btnTypes = {
        primary: "bg-green-500 text-white hover:bg-green-300 border-none",
        danger: "bg-red-500 text-white hover:bg-red-300 border-none",
        outline: "bg-white text-black border-2 border-black border-solid hover:border-green-500 hover:text-green-500",
        link: "bg-none text-green-500 hover:text-green-300 border-none",
    }

    const btnSizes = {
        sm: "h-8 text-sm",
        md: "h-9 text-base",
        lg: "h-10 text-lg",
    }

    const disabled = isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

    const className = `${baseStyle} ${btnSizes[size]} ${btnTypes[type]} ${disabled}`;

    return (
        <>
            <button onClick={handleClick} className={className} disabled={isDisabled}>
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