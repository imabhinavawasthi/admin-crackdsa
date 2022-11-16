import { Sidebar, SidebarItem } from "react-responsive-sidebar";
import { NavLink, useNavigate } from "react-router-dom";
import logogif from "../../Components/assets/logo.gif"
import "./sidebar.css"
import { PersonLinesFill, BoxArrowInRight } from 'react-bootstrap-icons';
const logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("crackdsa-user");
  window.location.reload(false);
}
const curruser = JSON.parse(localStorage.getItem('crackdsa-user'));

export const items = [
  
  <SidebarItem>
    <div className="pt-3 pb-3">
      <NavLink to="/" style={{ textDecoration: 'none' }}><img className="logogif-css" src={logogif} alt="crackdsanoteslogo" /></NavLink>

    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
      <NavLink to="/dashboard"  style={{ textDecoration: 'none', color: "white" }}>Dashboard </NavLink>

    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <NavLink to="/user/addblog" style={{ textDecoration: 'none', color: "white" }}>Add Blog</NavLink>
    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <NavLink to="/user/pofile" style={{ textDecoration: 'none', color: "white" }}>Profile  </NavLink>
    </div>
  </SidebarItem>,
  <SidebarItem>
    <div className="button-css">
    <a href="https://notes.crackdsa.com" target="_blank" style={{width:"100%", textDecoration: 'none', color: "white" }} >DSA Notes </a>
    </div>
  </SidebarItem>,
  <SidebarItem>
    {curruser?<><div className="mt-5">
      <button className="button-css" onClick={(e) => { logout(e) }}  >Logout <BoxArrowInRight /></button>
    </div></>:<>
    <div className="mt-5">
      <NavLink className="button-css p-3" style={{textDecoration:"none",color: "white"}} to="/auth"  >Signup/Login <BoxArrowInRight /></NavLink>
    </div>
    </>}
  </SidebarItem>,
];