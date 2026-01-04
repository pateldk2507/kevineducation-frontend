export default function TopNavbar({ onMenuClick }) {
    const title = "Kevin Education";

  return (
    <nav className="navbar navbar-light bg-white border-bottom px-3 ">
       <span className="d-lg-none"> 
            <button
                className="btn btn-outline-secondary"
                onClick={onMenuClick}
            >
        <i className="bi bi-list"></i>
      </button>
      </span> 

      <span className="navbar-brand mb-0 h6 text-center flex-grow-1">
        {title}
      </span>
    </nav>
  );
}
