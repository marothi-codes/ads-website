/** @jsx jsx */
import { jsx, Box, Container, Grid, Image, Text } from 'theme-ui';
import { Link } from '../link';
import theme from 'theme';
import data from './footer.data';
import FooterLogo from 'assets/footer-logo.svg';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Box sx={styles.footer.footerTopArea}>
        <Container>
          <Link path="/">
            <Image src={FooterLogo} width={240} alt="Footer Logo" />
          </Link>
          <Grid sx={styles.footer.grid}>
            <div>
              <h3>Amanzunza Contacts</h3>
              <hr sx={theme.styles.hr} />
              <Link path="mailto:info@adsolution.co.za" sx={styles.footer.footerTopArea.link}>
                <strong>Email: </strong>info@adsolution.co.za
              </Link>
              <Link path="callto:+27721297813" sx={styles.footer.footerTopArea.link}>
                <strong>Cell: </strong>+27 72 129 7813
              </Link>
              <Link path="callto:+27126771766" sx={styles.footer.footerTopArea.link}>
                <strong>Tel: </strong>+27 12 677 1766
              </Link>

              <nav>
                {data.menuItems.map((item, idx) => (
                  <Link
                    key={idx}
                    path={item.path}
                    sx={styles.footer.footerTopArea.link}
                    target="_blank">
                    {item.icon} {item.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h3>Amanzunza Office</h3>
              <hr sx={theme.styles.hr} />
              <address sx={styles.footer.footerTopArea.address}>
                Block G32 Unit 3, Waterford Court
                <br />
                Cnr Rabie Str &amp; Glover Ave
                <br />
                Die Hoewes
                <br />
                Centurion
                <br />
                0163
              </address>
            </div>
          </Grid>
        </Container>
      </Box>
      <Box sx={styles.footer.footerBottomArea}>
        <Box sx={styles.footer.menus}>
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
      pt: [5, 6, 6],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
      nav: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'left',
        width: '100%',
        clear: 'both',
      },
      link: {
        fontSize: [1, '18px'],
        color: '#fff',
        fontWeight: '400',
        mb: 2,
        cursor: 'pointer',
        transition: 'all 0.35s',
        display: 'block',
        textDecoration: 'none',
        lineHeight: [1.5, null, 1.8],
        px: [2, null, 4],
        textAlign: 'left',
        width: '100%',
        ':hover': {
          color: '#000',
        },
        '@media screen and (max-width: 1023.99px)': {
          textAlign: 'center',
        },
      },
      address: {
        textAlign: 'left',
        '@media screen and (min-width: 1024px)': {
          textAlign: 'right',
        },
        '@media screen and (max-width: 1023.99px)': {
          textAlign: 'center',
        },
      },
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
      fontSize: [1, '18px'],
      color: '#fff',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      width: '100%',
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
      gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(1,1fr)', null, 'repeat(2,1fr)'],
    },
  },
};
