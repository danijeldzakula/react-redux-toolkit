import Link from "next/link";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="logo-brand">
          <span className="text">Redux Toolkit</span>
        </Link>

        <nav className="nav">
          <ul>
            <li>
              <Link href="/" className="nav-link">
                <span className="text">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/products" className="nav-link">
                <span className="text">Products</span>
              </Link>
            </li>
            <li>
              <Link href="/cart" className="nav-link nav-link-cart">
                <span className="text">Cart</span>
                <span className="icon">{cart.totalCount}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
