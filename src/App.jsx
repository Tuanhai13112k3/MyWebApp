import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import './App.css';
import MyButton from './components/button/MyButton';
import MyInput from './components/input/MyInput';

//1. Định nghĩa Schema
const schema = z.object({
  age: z.coerce.number({ error: "Tuổi phải là số" })
    .min(1, "Tuổi không được để trống")
    .min(18, "Phải trên 18 tuổi")
    .max(65, "Không được quá tuôi lao động cho phép"),
  password: z.string().min(1, "Mật khẩu không được để trống").min(6, "Mặt khẩu tối thiểu 6 ký tự")
})

function App() {
  const {
    register, handleSubmit, formState: { errors }
  } = useForm({
    resolver: zodResolver(schema) //2. Kết nối Resolver
  });
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4" >
        {/**Đăng ký input với validation cơ bản của HTMl */}
        <MyInput
          label='Age'
          type='number'
          size='md'
          placeHolder='Nhập tuổi'
          errorMsg={errors.age?.message}
          {...register('age')}
        />

        <MyInput
          label='Password'
          type='password'
          size='md'
          placeHolder='Nhập mật khẩu'
          errorMsg={errors.password?.message}
          {...register('password')}

        />
        <MyButton type="primary" size="md" >
          Submit
        </MyButton>
      </form>
    </>
  );
};

export default App
