import { GoDotFill } from "react-icons/go";
import MyCard from "../../components/card/MyCard";

const MyTodoList = ({ fields, data = [], handleDoubleClick }) => {
    return (
        <div className="flex justify-between">
            {fields.map((field) => (
                <div key={field.key}>
                    <div className="flex items-center mb-5">
                        <GoDotFill className={field.key === 'todo' ? 'text-[#17A2B8]' : field.key === 'inProgres' ? 'text-[#FFC107]' : 'text-[#8BC34A]'} />
                        <h3 className="text-2xl font-semibold">{field.label}</h3>
                    </div>
                    <div className=" bg-[#F2F6FF] p-5 h-[650px] w-[400px] items-center flex flex-col rounded-md overflow-y-auto overflow-x-hidden ">
                        {data
                            .filter(item => item.status === field.key)
                            .map((item) => (
                                <div key={item.id}
                                    onDoubleClick={() => handleDoubleClick(item)}>
                                    <MyCard
                                        key={item.id}
                                        title={item.title}
                                        description={item.description}
                                        priority={item.priority}
                                        time={item.time}
                                        date={item.date}
                                        status={item.status}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );

};

export default MyTodoList;