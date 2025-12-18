import { useState } from 'react';
import './App.css';
import MyButton from './components/button/MyButton';
import MyInput from './components/input/MyInput';


function App() {
  //#region onChange Two-way Binding
  // const [name, setName] = useState("");

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleReset = () => {
  //   setName("");
  // };

  // return (
  //   <div style={{ padding: 20 }}>
  //     <h1>Xin chào: {name ? name : 'Guest'}</h1>
  //     <input
  //       type='text'
  //       placeholder='Nhập tên của bạn...'
  //       value={name}
  //       onChange={handleChange}
  //       style={{ padding: 10, marginRight: 10 }}
  //     />
  //     <button onClick={handleReset}>Clear</button>
  //   </div>
  // );
  //#endregion

  //#region CHALLENGE: useState và onChange
  /**
   * Máy tính chuyển đổi tiền tệ
   * 1. Có 1 ô input để nhập số tiền (VND)
   * 2. Co 1 nút bấm "Chuyển đổi sang USD"
   * 3. Có 1 dòng text hiển thị kết quả 
   *    * Ban đầu chưa hiển thị gì
   *    * Khi bấm nút, lấy số tiền VND/25000 -> USD
   *    * Hiển thị: "Số tiền là: $..."
   *  4. Nếu user nhập số âm hoặc chữ, hiển thị thông báo lỗi màu đỏ
   */
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleExchange = () => {
    if (!error && inputValue !== "") {
      setResult(Number(inputValue) / 25000);
    }
  }
  const handleInputValue = (e) => {
    const concurrencyUSD = e.target.value;

    setInputValue(concurrencyUSD);
    if (concurrencyUSD < 0 || isNaN(+concurrencyUSD)) {
      setError("Tiền tệ không đươc âm hoặc chứa ký tự.")
      setResult(null);
    } else {
      setError("");
    }
  }
  return (
    <div className='container'>
      <MyInput
        label="Số tiền"
        type="text"
        size="sm"
        placeHolder="Nhập số tiền muốn chuyển đổi"
        value={inputValue}
        onInputChange={handleInputValue}
        errorMsg={error}
      />
      <MyButton type="primary" size='sm' handleClick={handleExchange}>
        Exchange
      </MyButton>
      {/* <input
        type='text'
        placeholder='Nhập số tiền'
        value={inputValue}
        onChange={handleInputValue}
      /> */}
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      {result && <p>Số tiền là: ${result.toFixed(2)}</p>}
    </div>
  );

  //#endregion
};

export default App
