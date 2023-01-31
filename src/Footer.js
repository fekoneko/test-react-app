const Footer = () => {
  const today = new Date();
  return (
    <footer>fekoneko, { today.getFullYear() }</footer>
  );
}

export default Footer;