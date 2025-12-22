import PropTypes from 'prop-types';
const MyTable = ({ fields, data, children, onRowDoubleClick }) => {
    return (
        <>
            <table className='w-[500px] text-center'>
                <thead className='border-b-2 border-black/50'>
                    <tr>
                        {fields.map((field) => (
                            <th key={field.key}>{field.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr className='border-b-2 border-black/50 cursor-pointer hover:bg-green-100' key={item.id} onDoubleClick={() => onRowDoubleClick(item)}>
                            {fields.map((field) => (
                                field.key !== 'action' ? <td key={field.key}>{item[field.key]}</td> : <td key={field.key}>{children}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
MyTable.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array,
    children: PropTypes.node,
    onRowDoubleClick: PropTypes.func
}
export default MyTable;
