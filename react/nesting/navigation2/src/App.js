import Header from "./components/Header";
import Nav from "./components/Nav";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header className="header">
        <Logo />
        <Nav>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}

{
  /* <button
type="button"
onClick={() => console.log("I could toggle a profile!")}
aria-label="toggle profile"
>
<img className="round-image" src={avatar} alt="avatar" />
</button> */
}
