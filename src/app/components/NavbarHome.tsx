import Link from "next/link";
import "./NavbarHome.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl nav-link-home">Reisnood.be</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/reistips" className="nav-link-home ">
                Reistips
              </Link>
            </li>
            <li>
              <Link href="/uniekeAccomodaties" className="nav-link-home ">
                Unieke Accomodaties
              </Link>
            </li>
            <li>
              <Link href="/samenwerken" className="nav-link-home ">
                Samenwerken
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link-home ">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link-home ">
                Blog
              </Link>
            </li>
            <li>
              <details>
                <summary className="nav-link-home ">Bestemmingen</summary>
                <ul className="p-2 rounded-t-none">
                  <li>
                    <p>Ijsland</p>
                  </li>
                  <li>
                    <p>Norwegen</p>
                  </li>
                  <li>
                    <p>Thailand</p>
                  </li>
                  <li>
                    <p>Nieuw-Zeeland</p>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
