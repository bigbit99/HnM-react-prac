import React, {useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticate, setAuthenticate}) => {
  const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
  
  //로그인 페이지로 navigating 하는 법 
  const navigate = useNavigate();
  // const goToLogin = () => { 
  //   navigate('./login');
  // }

  const search = (event) => {
    if(event.key === "Enter") { 
      //입력한 검색어를 읽어와서 (인풋안에 있는 이벤트 값 읽어옴 )
      let keyword = event.target.value;
      
      //url을 바꿔준다 
      navigate(`/?q=${keyword}`);
      // console.log("keyword", keyword);
    }
  }

  return (
    <div>
       <div className="loginbtn">

        {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그아웃</span>
            </div>
          ) : (
            <div onClick={() => navigate("/login")}>
              <FontAwesomeIcon icon={faUser} />
              <span>로그인</span>
            </div>
          )
        }
      </div>

      
      <div className="nav-section">
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png" alt="" />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu)=>(<li>{menu}</li>))}
        </ul>
      
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} className="search-icon"/>
          <input 
            type="text" 
            placeholder="제품검색" 
            className="search-input"
            onKeyDown={(event) => search(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
