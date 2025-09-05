const Header = ({ user, onLogout }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Customer Management</h1>
      <div className="flex items-center gap-4">
        <span>Welcome, {user}</span>
        <button 
          onClick={onLogout} 
          className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-slate-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;