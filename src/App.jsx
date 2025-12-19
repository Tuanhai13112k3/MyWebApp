import './App.css';

import CountDown from './components/base/CountDown';
import UseEff from './components/base/UseEff';



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

  // //#region Component
  // const [inputValue, setInputValue] = useState("");
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState("");
  // const [isPopupVisible, setVisible] = useState(false);
  // const field = ([
  //   { key: 'id', label: 'ID' },
  //   { key: 'name', label: 'Name' },
  //   { key: 'age', label: 'Age' },
  //   { key: 'action', label: 'Action' }
  // ]);
  // const data = ([
  //   { id: 1, name: 'Alice', age: 25 },
  //   { id: 2, name: 'Bob', age: 30 },
  //   { id: 3, name: 'Charlie', age: 35 }
  // ]);

  // const handleExchange = () => {
  //   if (!error && inputValue !== "") {
  //     setResult(Number(inputValue) / 25000);
  //   }
  // }
  // const handleInputValue = (e) => {
  //   const concurrencyUSD = e.target.value;

  //   setInputValue(concurrencyUSD);
  //   if (concurrencyUSD < 0 || isNaN(+concurrencyUSD)) {
  //     setError("Tiền tệ không đươc âm hoặc chứa ký tự.")
  //     setResult(null);
  //   } else {
  //     setError("");
  //   }
  // }

  // const handleRowDoubleClick = (item) => {
  //   alert(`Bạn đã chọn dòng có ID: ${item.id}, Name: ${item.name}, Age: ${item.age}`);
  // }

  // const handleTogglePopup = () => {
  //   setVisible(!isPopupVisible);
  // }

  // return (
  //   <div className='container'>
  //     <MyInput
  //       label="Số tiền"
  //       type="text"
  //       size="sm"
  //       placeHolder="Nhập số tiền muốn chuyển đổi"
  //       value={inputValue}
  //       onInputChange={handleInputValue}
  //       errorMsg={error}
  //     />
  //     <MyButton type="primary" size='sm' handleClick={handleExchange}>
  //       Exchange
  //     </MyButton>
  //     {/* <input
  //       type='text'
  //       placeholder='Nhập số tiền'
  //       value={inputValue}
  //       onChange={handleInputValue}
  //     /> */}
  //     {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

  //     {result && <p>Số tiền là: ${result.toFixed(2)}</p>}

  //     <MyTable fields={field} data={data} onRowDoubleClick={handleRowDoubleClick}>
  //       <MyButton type="secondary" size="sm" handleClick={() => alert('Edit action')}>Edit</MyButton>
  //       <MyButton type="danger" size="sm" handleClick={handleTogglePopup}>Delete</MyButton>
  //     </MyTable>

  //     <MyPopup
  //       visible={isPopupVisible}
  //       title="My Popup Title"
  //       footer={
  //         <>
  //           <MyButton type="primary" size="sm" handleClick={() => alert('Confirmed!')}>Confirm</MyButton>
  //           <MyButton type="outline" size="sm" handleClick={handleTogglePopup}>Cancel</MyButton>
  //         </>
  //       }
  //       onClose={handleTogglePopup}
  //     >
  //       <p>This is the content of the popup.</p>
  //     </MyPopup>
  //   </div>
  // );

  // //#endregion

  //#region useEffect and Lifecycle

  /**
   * Yêu cầu 1 (Lifecycle - Mounting):
   *    Khi Component hiện lên, tự động gọi API giả này: https://jsonplaceholder.typicode.com/users/1
   *    Hiển thị Tên User lấy được ra màn hình.
   *    Dùng useEffect với [].
   * Yêu cầu 2 (Lifecycle - Unmounting):
   *    Có một State seconds đếm ngược từ 180 xuống 0.
   *    Dùng setInterval trong useEffect.
   *    Quan trọng: Phải dọn dẹp clearInterval khi Component bị hủy (Bạn có thể test bằng cách tạo một nút để ẩn/hiện Component này ở App cha).
   * Yêu cầu 3 (Lifecycle - Updating):
   *    Mỗi khi seconds thay đổi, cập nhật tiêu đề Tab trình duyệt (document.title) thành số giây còn lại.
   */

  return (
    <>
      <UseEff />
      <CountDown />
    </>
  );

  //#endregion
};

export default App
