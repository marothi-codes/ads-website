/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import theme from 'theme';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Experienced Team',
    text:
      'It ionsequat dolortis molor duis, hendrem mod. Adionsequat prat, molore re adignibh, dolutatueros, feugiat.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Timeous Service Delivery',
    text:
      'Ver velestis lortie quis, quat essequating vullan ea, uismodolor quamcommy erit vullutat. Nummodolor, ispum unt commy alis iurerosto modip, an lam dolorer ril se.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Maximal Transparency',
    text:
      'Essequating nonsecte ibh ullamcommy nos veliquamcon laore iusto exeraessit rat. Quip atem voloreetum ver ril dion conse molent niatuero, facillametum.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Vendiamet it tin feugiat eros irillamet lummy eui vullut molum vullam. Lor alit ate lutpat vullan minisi iurem feugiam verciduisi conulputat voloreetum velit.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" sx={{ variant: 'section.whyUs' }}>
      <Container>
        <hr sx={theme.styles.hr} />
        <br />
        <br />

        <SectionHeader slogan="BEST IN THE BUSINESS" title="Why Work with ADS" />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: ['40px 0', null, '45px 30px', null, '60px 50px', '70px 50px', null, '80px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
