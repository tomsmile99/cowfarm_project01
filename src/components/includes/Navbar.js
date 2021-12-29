import Link from 'next/link';
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    return (
        <nav className="navbar navbar-expand-lg navbar-light bgNavbar">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Navbar</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href="/">
                                <a className={router.pathname == "/" ? "active nav-link" : "nav-link"} aria-current="page">หน้าหลัก</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className={router.pathname == "/about" ? "active nav-link" : "nav-link"}>เกี่ยวกับเรา</a>
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className={router.pathname == "/service1" ||  router.pathname == "/service2" ? "active nav-link dropdown-toggle" : "nav-link dropdown-toggle"}
                            href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                ผลิตภัณฑ์
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link href="/service1">
                                        <a className="dropdown-item">ซื้อ-ขายวัว</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/service2">
                                        <a className="dropdown-item">ขายน้ำเชื้อวัว</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link href="/centact">
                                <a className={router.pathname == "/centact" ? "active nav-link" : "nav-link"}>ติดต่อเรา</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
