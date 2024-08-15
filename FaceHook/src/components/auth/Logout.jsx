import React from 'react'
import LogouIcon from '../../assets/icons/logout.svg'
import {useNavigate} from 'react-router-dom'

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  }

  return (
    <button
      onClick={handleLogout}
      className="icon-btn">
      <img src={LogouIcon} alt="Logout" />
    </button>
  );
}

export default Logout
