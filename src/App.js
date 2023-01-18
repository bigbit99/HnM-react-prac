import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Form } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './route/PrivateRoute';

//1. 전체상품페이지 , 로그인 페이지 , 상품 상세페이지 
//1-1. 네비게이션 페이지 만들기
//2. 전체상품페이지에서는 상품 전체를 볼 수 있다.
//3. 로그인버튼을 누르면 로그인 페이지가 나온다.
//4. 상품 디테일을 눌렀으나, 로그인이 안되있으면 로그인페이지가 먼저 
//5. 로그인이 되어있으면 상품 디테일을 볼 수 있음 
//6. 로그아웃 버튼을 클릭하면 로그아웃 됨 
//7. 로그아웃이 되면 상품디테일 페이지 못봄, 다시 로그인페이지 보임 
//8. 버튼이 로그인-로그아웃으로 텍스트 바뀜 
//9. 상품을 검색할 수 있다. 

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  
  useEffect(()=>{
    console.log("aaaa", authenticate);
  }, [authenticate])

  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll/>} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </>
  );
}

export default App;
