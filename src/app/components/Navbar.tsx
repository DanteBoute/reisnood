import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbarNoBanner navbar bg-blue-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl nav-link-other">
            Reisnood.be
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/reistips" className="nav-link-other">
                Reistips
              </Link>
            </li>
            <li>
              <Link href="/uniekeAccomodaties" className="nav-link-other">
                Unieke Accomodaties
              </Link>
            </li>
            <li>
              <Link href="/samenwerken" className="nav-link-other">
                Samenwerken
              </Link>
            </li>
            <li>
              <Link href="/contact" className="nav-link-other">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/blog" className="nav-link-other ">
                Blog
              </Link>
            </li>
            <li>
              <details>
                <summary className="nav-link-other">Bestemmingen</summary>
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
