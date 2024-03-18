import { createClient } from "@/prismicio";
import NavBar from "./NavBar";

async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header>
      <NavBar settings={settings} />
    </header>
  );
}

export default Header;
