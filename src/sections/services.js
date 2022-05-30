/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import theme from 'theme';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
//import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Debt Review Removal',
    text:
      "We assist clients with debt review related matters by making sure that they're cleared from Debt Review Status and also have the status updated so that the client's name may be cleared when their credit records are checked.",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Instalment Reduction',
    title: 'Instalment Reduction',
    text:
      "Payments that are fractionally done on an instalment basis can be a pain for consumers since service providers and/or creditors tend to overcharge so our attorneys are here to help in that regard by negotiating on clients' behalf with a legal backbone unavailable to most.",
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Administration Order',
    title: 'Administration Order',
    text:
      'We also perform Administration Order Removals and status updates for our clients. So not only are you cleared but the status update allows you to remain financially active in this economy driven society we live in.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Judgements & Adverse',
    title: 'Judgements & Adverse',
    text:
      "For severe judgements and default statuses we are able to have the status updated so that clients can have the peace of mind knowing that they're free from the financial disadvantages of being financially punished.",
  },
];

export default function Services() {
  return (
    <section id="service" sx={{ variant: 'section.services' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />
        <SectionHeader slogan="WHAT WE DO" title="Our Services" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)'],
  },
};
