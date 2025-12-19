import PropTypes from 'prop-types';
const MyTable = ({ fields, data, children, onRowDoubleClick }) => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {fields.map((field) => (
                            <th key={field.key}>{field.label}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} onDoubleClick={() => onRowDoubleClick(item)}>
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
