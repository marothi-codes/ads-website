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
    title: 'Debt Review',
    text:
      'Veriliquat lortin atueraestrud ese uipsuscidunt, volute eummolestin etum doluptat ero exeraessit exeraestrud. Ncidui dolortionum feu. Vercincinis tisiscipis dunt esse lan il, velesequipit a luptat quamcommy, vercincinis.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Debt Administration',
    text:
      'Atuerat euip lenit nonsequi, modip in vullan conullam consequat, eros sisi. Iriuscing quamcommy adionsequat pit iurerosto nonsecte lis. Etue hendiam, modip odo re eu nonsecte, wiscip.',
  },
  {
    id: 3,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Judgements & Adverse',
    text:
      'Quis minit facilismolut, quam ullaorperit enim, feugiam uismodolor minis nisci. Wiscil, iriustrud hendiam amconsequis adiam dolorer aliquipsusci, lenim ed wiscil ver amconsequis. Dolenismodit nit vulput vullutat.',
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
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)'],
  },
};
