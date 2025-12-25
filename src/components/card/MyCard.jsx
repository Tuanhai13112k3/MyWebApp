import PropTypes from "prop-types";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";

/**
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [priority]
 * @property {string} [time]
 * @property {string} [date]
 * @property {string} [status]
 */

const MyCard = ({ id, title, description, priority, date, status }) => {
    const statusType = {
        todo: 'border-[#17A2B8]',
        inProgres: 'border-[#FFC107]',
        completed: 'border-[#8BC34A]',
    }

    // Format date để hiển thị
    const formatDate = (dateValue) => {
        if (!dateValue) return '';
        const d = dateValue instanceof Date ? dateValue : new Date(dateValue);
        return d.toLocaleString('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const className = `border-2 rounded-lg bg-white mb-2 pt-6 pl-4 pr-4 pb-2 w-80 ${statusType[status]}`
    return (
        <div className={className}>
            <h1 className="hidden">{id}</h1>
            <div className="flex justify-between items-center">
                <h1 className="text-xl">{title}</h1>
                <BsThreeDotsVertical />
            </div>
            <p className="my-1 text-black/50">{description}</p>
            <div className="flex justify-between items-center">
                <p>{formatDate(date)}</p>
                {priority === 'high' ? (<FcHighPriority />) : priority === 'med' ? (<FcMediumPriority />) : (<FcLowPriority />)}
            </div>
        </div>
    );
};

export default MyCard;
MyCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.oneOf(['High', 'Medium', 'Low']),
    time: PropTypes.string,
    date: PropTypes.string,
    status: PropTypes.oneOf(['todo', 'inProgres', 'completed']),
}