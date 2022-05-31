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
    altText: 'Vision',
    title: 'Our Vision',
    text: `To continuously strive to be the No1 Agency for Credit Legal Services in SA, by developing beneficial and lasting relationships with our clients through a process of continuous improvement whilst optimising their returns by delivering the most efficient and effective service.`,
  },
  {
    id: 2,
    imgSrc: Subscription,
    altText: 'Our Objectives',
    title: 'Our Objectives',
    text: `Our objective is to provide a diligent, pragmatic and professional service for our clientele, to treat all clients with respect, honesty and integrity through our hard work ethic,
endeavour and clear lines of communication, and to perpetually empower, encourage and motivate our employees to exceed all our clients' expectations.`,
  },
  {
    id: 3,
    imgSrc: Partnership,
    altText: 'Our Mission',
    title: 'Our Mission',
    text: `We aim to maintain ISO: 9001 standards and our commitment to quality, to endeavour to be the industry leader for Private Credit Legal Services in SA, by combining our wealth of experience and innovative technology, to empower our employees to achieve their individual goals through investment, empowerment and self-development and to maximize the collection of all debts whilst remaining mindful of existing business relationships.`,
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Elite Tier Customer Support',
    title: 'Elite Tier Customer Support',
    text:
      "With every client that knocks on our door, we walk with the client throughout the entire process and provide the client with clarity where applicable and/or by the client's request. We also guide the client along the way to ensure that no step of the process is too esoteric for him/her.",
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
    gridTemplateColumns: ['repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(1,1fr)', 'repeat(2,1fr)'],
    '@media screen and (max-width: 767.99px)': {
      textAlign: 'center',
    },
  },
};
