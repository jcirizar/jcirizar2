import { GITHUB, LINKEDIN } from '../lib/constants';

const Footer = () => {
  return (
    <footer>
      <a href={GITHUB}>
        <i className="jci-g"></i>
        <span>Github</span>
      </a>
      <a href={LINKEDIN}>
        <i className="jci-l"></i>
        <span>LinkedIn</span>
      </a>
      <a href="mailto:juan@irizar.dev">
        <i className="jci-i"></i>
        <span>Email</span>
      </a>
    </footer>
  );
};

export default Footer;
