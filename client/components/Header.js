import Link from "next/link";
import { Menu } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu style={{ marginTop: "20px" }}>
      <Link href="/">
        <Menu.Item>Home</Menu.Item>
      </Link>
      <Link href="/change_greeting">
        <Menu.Item>Change greeting</Menu.Item>
      </Link>
      <Link href="/about">
        <Menu.Item>About</Menu.Item>
      </Link>
    </Menu>
  );
};

export default Header;
