import { Controller } from "react-hook-form";
import Select from "react-select";

const MyComboBox = ({
    name,
    control,
    size = 'md',
    label,
    placeholder,
    options,
    isMulti = false,
    isDisabled = false,
    ...props
}) => {
    const inputSize = {
        sm: "h-8 text-sm",
        md: "h-9 text-base",
        lg: "h-10 text-lg",
    };
    const classLabelName = `font-bold h-fit mb-1 text-black ${inputSize[size]}`
    return (
        <div className='flex flex-col mb-4'>
            {label && <label className={classLabelName}>{label}</label>}

            <Controller
                name={name}
                control={control}
                render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                    <>
                        <Select
                            ref={ref}
                            options={options}
                            placeholder={placeholder}
                            isMulti={isMulti}
                            isDisabled={isDisabled}
                            value={options?.find(option => option.value === value) || null}
                            onChange={(selectedOption) => {
                                onChange(isMulti
                                    ? selectedOption?.map(opt => opt.value)
                                    : selectedOption?.value
                                );
                            }}
                            onBlur={onBlur}
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: error ? '#ef4444' : baseStyles.borderColor,
                                    '&:hover': {
                                        borderColor: error ? '#ef4444' : baseStyles.borderColor,
                                    },
                                    paddingInline: '8px',
                                    cursor: 'pointer',
                                    boxShadow: state.isFocused ? (error ? '0 0 0 1px #ef4444' : '0 0 0 1px #8bc34a') : 'none',
                                })
                            }}
                            {...props}
                        />
                        {error && <p className="text-red-500 text-xs mt-1 italic">{error.message}</p>}
                    </>
                )}
            />
        </div>
    );
};

export default MyComboBox;