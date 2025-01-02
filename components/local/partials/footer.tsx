// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} TicketCrunch. All Rights Reserved.</p>
        <nav className="mt-2">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
