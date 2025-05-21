import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-100 text-green-900 pt-10 pb-6 px-4 font-sans mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Info</h2>
          <p className="text-sm">📧 BaganBondhu@gmail.com</p>
          <p className="text-sm">📞 +880 1234 567 890</p>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Terms & Support</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/terms" className="hover:text-green-700 transition">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-green-700 transition">Privacy Policy</a></li>
            <li><a href="/support" className="hover:text-green-700 transition">Help & FAQ</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-green-800 mt-2">
            <a href="https://facebook.com" target="_blank" className="hover:text-green-600 transition"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-green-600 transition"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" className="hover:text-green-600 transition"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" className="hover:text-green-600 transition"><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-sm text-green-700 border-t pt-4 border-green-200">
        © {new Date().getFullYear()} BaganBondhu — Crafted with 🌿 Love for Gardeners
      </div>
    </footer>
  );
};

export default Footer;
