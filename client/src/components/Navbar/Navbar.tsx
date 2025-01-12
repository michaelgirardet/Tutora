import Logo from "../../assets/images/logo-tutora-color.png";
import SignInLogo from "../../assets/images/signin.png";
import SignUpLogo from "../../assets/images/signup.png";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="" id="logo-tutora" />
      <ul>
        <li>Accueil</li>
        <li>Posts</li>
        <li>Tutoriels</li>
        <li>Offres d'Emploi</li>
      </ul>
      <section className="sign-icons">
        <img src={SignInLogo} alt="" id="logo-signin" />
        <img src={SignUpLogo} alt="" id="logo-signup" />
      </section>
    </div>
  );
}

export default Navbar;
