import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import './App.css';

//1. Định nghĩa Schema
const schema = z.object({
  age: z.coerce.number({ invalid_type_error: "Tuổi phải là số" }).min(18, "Phải trên 18 tuổi").max(65, "Không được quá tuôi lao động cho phép"),
  password: z.string().min(6, "Mặt khẩu tối thiểu 6 ký tự")
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
        <div>
          <label>Age:</label>
          <input type='number'
            {...register("age", { required: "Tuổi không được để trống" })}
            className="border p-2"
            placeholder='Nhập số tuổi'
          />
          {/**Hiển thị lỗi */}
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            {...register("password", {
              required: "Mặt khẩu không được để trống",
            })}
            placeholder='Password'
            className="border p-2"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2"
        >Submit</button>
      </form>
    </>
  );
};

export default App
