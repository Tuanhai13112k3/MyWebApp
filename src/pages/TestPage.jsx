import { Controller } from "react-hook-form";
import Select from "react-select";

const RHFSelect = ({
    name,
    control,
    //Các props cần thiết
    options,
    label,
    placeholder,
    isMulti = false, //Mặc định là single select
    ...rest //các props khác của react-select nếu cần
}) => {
    return (
        <div className="mb-2">
            {/**Hiển thị label */}
            {label && <label className="font-bold block mb-1">{label}</label>}

            {/**Dùng controller để bọc Reat-Select */}
            <Controller
                name={name}
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <>
                        <Select
                            {...field}
                            options={options}
                            isMulti={isMulti}
                            placeholder={placeholder || "Chọn..."}
                            //Truyền style custom nếu có lỗi 
                            styles={{
                                control: (base) => ({
                                    ...base,
                                    borderColor: error ? 'red' : base.borderColor,
                                    '&:hover': {
                                        borderColor: error ? 'red' : base.borderColor
                                    }
                                })
                            }}
                            {...rest}
                        />
                        {/**Hiển thị lỗi ngay tại đây */}
                        {error && <p className="text-red-500 text-xs mt-2">{error.message}</p>}
                    </>

                )}

            />
        </div>
    )
};

export default RHFSelect;