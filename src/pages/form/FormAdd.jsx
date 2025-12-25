import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import MyButton from '../../components/button/MyButton';
import MyComboBox from '../../components/combobox/MyComboBox';
import MyInput from '../../components/input/MyInput';

const schema = z.object({
    title: z.string()
        .min(1, "Tiêu đề không được để trống"),
    description: z.string().optional(),
    priority: z.enum(['high', 'med', 'low']),
    status: z.enum(['todo', 'inProgres', 'completed']).optional(),
    date: z.coerce.date(),
});

const priorityOptions = [
    { value: 'high', label: 'Cao' },
    { value: 'med', label: 'Trung bình' },
    { value: 'low', label: 'Thấp' },
]
const statusOptions = [
    { value: 'todo', label: 'To Start' },
    { value: 'inProgres', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },

]
/**
 * @property {function} [handleFormSubmit]
 * @property {function} [handleFormClose]
 */
const FormAdd = ({ task, handleFormSubmit, handleFormClose }) => {
    const formatDateForInput = (date) => {
        if (!date) return '';
        let d = new Date(date);
        return d.toISOString().slice(0, 16);
    };

    const {
        register, control, handleSubmit, formState: { errors }
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            title: task?.title || '',
            description: task?.description || '',
            priority: task?.priority || 'med',
            status: task?.status || 'todo',
            date: formatDateForInput(task?.date),
        }
    })
    return (
        <div className=' fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-[9999]'>
            <div className='text-black bg-white w-[20%] h-[60%] p-3 rounded-lg flex flex-col'>
                <h1 className='flex justify-center font-bold text-lg'>
                    {task ? 'Chỉnh sửa lời nhắc' : 'Lời nhắc mới'}
                </h1>
                <form onSubmit={handleSubmit(handleFormSubmit)} className='flex flex-col flex-1'>
                    <MyInput
                        label='Tiêu đề'
                        type='text'
                        placeHolder='Lời nhắc mới'
                        errorMsg={errors.title?.message}
                        {...register('title')}
                    />
                    <MyInput
                        label='Ghi chú'
                        type='text'
                        placeHolder='Mô tả thêm'
                        errorMsg={errors.description?.message}
                        {...register('description')}
                    />
                    <MyComboBox
                        name='priority'
                        control={control}
                        label="Mức ưu tiên"
                        options={priorityOptions}
                    />
                    <MyInput
                        label='Thời gian'
                        type='datetime-local'
                        errorMsg={errors.date?.message}
                        {...register('date')}
                    />
                    <MyComboBox
                        name='status'
                        control={control}
                        label="Trạng thái"
                        options={statusOptions}
                    />
                    <div className='flex justify-end gap-2 mt-auto'>
                        <MyButton size='lg'>
                            Submit
                        </MyButton>
                        <MyButton size='lg' type='danger' handleClick={handleFormClose}>
                            Cancel
                        </MyButton>
                    </div>
                </form>

            </div>

        </div>
    );
}
export default FormAdd;