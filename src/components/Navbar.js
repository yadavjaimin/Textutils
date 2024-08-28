import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>  {/* Use Link instead of link */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>  {/* Use Link instead of link */}
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/about'>{props.about}</a>  {/* Use Link instead of link */}
              </li>
            </ul>

            {/* <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheck" onClick={props.forchange} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">setttt</label>
            </div> */}

            <div className={`form-check form-switch text-${props.mode === "dark" ? "light" : "dark"}`}>
              <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckChecked" />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{props.text}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
};

// Uncomment the below if you want default props
// Navbar.defaultProps = {
//   title: 'Set Title Here',
//   about: 'About Text Here'
// };



// PropTypes : It can be used to validate the data that a component receives as input.The PropTypes module contains a set of functions for validating the types of data passed in as props. And return errors when validation fails.

Navbar.propTypes = {
    title: PropTypes.string.isRequired,  //you can store only string in title variable
    about: PropTypes.string.isRequired
  };

//PropTypes bydefault

  // Navbar.defaultProps={
  //   title: 'set title here',
  //   about: 'about text here'
  // }