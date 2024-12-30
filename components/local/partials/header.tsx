import Link from 'next/link';

type Link = {
  title: string,
  link: string,
  authenticated: boolean
}

const Header = () => {


    const links: Link[] = [
      {
        title: "Home",
        link: "/",
        authenticated: false
      },
      {
        title: "Browse events",
        link: "/events/browse",
        authenticated: false
      },
      {
        title: "Sign in",
        link: "/login",
        authenticated: false
      },
      {
        title: "My account",
        link: "/account",
        authenticated: true
      },
      {
        title: "Sign out",
        link: "/auth/logout",
        authenticated: true
      },
    ]

    const renderNavLinks = (links: Link[], authenticated: boolean): React.JSX.Element[] => {
      let t: React.JSX.Element[] = []

      links.forEach((l: Link, i: number) => {
        // if (authenticated == l.authenticated) {
          t.push(<li key={i}>
            <Link href={l.link} className="text-gray-600 hover:text-blue-600 transition">
              {l.title}
            </Link>
          </li>);
        // }
      })

      return t
    }

    return (
        <header className="bg-white">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold text-blue-600">
              <Link href="/">TicketCrunch</Link>
            </div>
    
            {/* Navigation */}
            <nav>
              <ul className="hidden md:flex space-x-6">
                {/* as li elements */}
                {renderNavLinks(links, true)}
              </ul>
            </nav>
    
            {/* Mobile Menu */}
            <div className="md:hidden">
              <button
                className="text-gray-600 focus:outline-none"
                aria-label="Toggle Navigation"
                // onClick={() => alert("Implement mobile menu toggle here!")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
      );
};

export default Header;
