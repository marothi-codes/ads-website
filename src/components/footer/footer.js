/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from 'theme-ui';
import { Link } from 'components/link';
import theme from 'theme';
import data from './footer.data';
import FooterLogo from 'assets/footer-logo.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerTopArea}>
        <Container>
          <Grid sx={styles.footer.grid}>
            <div>
              <h3>Navigation</h3>
              <hr sx={theme.styles.hr} />
            </div>
            <div>
              <h3>Contact Amanzunza</h3>
              <hr sx={theme.styles.hr} />
              <Text>
                <strong>Cell: </strong>+27 72 129 7813
              </Text>
            </div>
            <div>
              <h3>Amanzunza GPS</h3>
              <hr sx={theme.styles.hr} />
            </div>
          </Grid>
        </Container>
      </Box>
      <Box sx={styles.footer.footerBottomArea}>
        <Box sx={styles.footer.menus}>
          <nav>
            {data.menuItems.map((item, idx) => (
              <Link key={idx} to={item.path} sx={styles.footer.link}>
                {item.icon}
              </Link>
            ))}
          </nav>
          <br />
          <Link path="/">
            <Image src={FooterLogo} width={200} alt="Footer Logo" />
          </Link>
          <br />
          <Text sx={styles.footer.copyright}>
            Copyright &copy; {new Date().getFullYear()} | Amanzunza Debt Solutions (Pty) Ltd
            <br />
            <Link
              path="https://msdc.africa"
              target="_blank"
              rel="noopener noreferrer"
              sx={styles.footer.link}>
              Website By: MSDC Inc
            </Link>
          </Text>
        </Box>
      </Box>
    </footer>
  );
}

const styles = {
  footer: {
    footerBottomArea: {
      backgroundColor: '#000',
      color: '#fff',
      display: 'flex',
      pt: [1, null, 2],
      pb: ['10px', null, '10px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    footerTopArea: {
      backgroundColor: '#d52028',
      color: '#fff',
      display: 'flex',
      pt: [2, null, 2],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
      },
    },

    link: {
      fontSize: [1, '15px'],
      color: '#fff',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
    grid: {
      width: ['100%', '80%', '100%'],
      mx: 'auto',
      gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
      gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
    },
  },
};
