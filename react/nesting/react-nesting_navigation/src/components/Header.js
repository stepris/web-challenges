// import avatar from "../img/avatar.jpg";
// import logo from "../img/logo.jpg";

export default function Header({ children }) {
  console.log(children);
  return <header className="header">{children}</header>;
}
