import CartWidget from './CartWidget';

const Navbar = () => {
	return (
<div className="navbar bg-base-100 mb-5">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Logo</a>
  </div>
  <div className="flex-none">
    <CartWidget/>
    <div className="dropdown dropdown-end">
      <label className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
	)}

export default Navbar
