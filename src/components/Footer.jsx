export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="copyright">
      <p>Copyright © {year}</p>
    </footer>
  );
}
