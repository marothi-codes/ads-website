/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{ cursor: 'pointer', display: 'flex', mr: 15, variant: 'links.logo' }}
      {...rest}>
      <Image src={src} alt="navbar logologo" />
    </Link>
  );
}
