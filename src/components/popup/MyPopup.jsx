import PropTypes from "prop-types";
import '/src/assets/css/MyPopup.css';

const MyPopup = ({ visible, title, children, footer, onClose }) => {
    return (
        <>
            {visible && (
                <div className="my-popup-overlay">
                    <div className="my-popup">
                        <div className="my-popup-header">
                            <p>{title}</p>
                            <i onClick={onClose}>×</i>
                        </div>
                        <div className="my-popup-body">
                            {children}
                        </div>
                        <div className="my-popup-footer">
                            {footer}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

MyPopup.propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    footer: PropTypes.node
}

export default MyPopup;