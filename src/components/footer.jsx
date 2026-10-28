function Footer({ name }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        Lab 11 | React Basics | {name} | {year}
      </p>
    </footer>
  );
}
 
export default Footer;
