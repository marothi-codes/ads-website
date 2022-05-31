import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from '../sections/banner';
import Services from '../sections/services';
import AboutSection from '../sections/about-section';
import WhyUs from '../sections/why-us';
import Process from '../sections/process';
//import TeamSection from '../sections/team-section';
//import TestimonialCard from '../sections/testimonial';
import ContactSection from 'sections/contact-section';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Amanzunza Debt Solutions (Pty) Ltd" />
        <Banner />
        <AboutSection />
        <Services />
        <WhyUs />
        <Process />
        {/* <TestimonialCard /> */}
        <ContactSection />
      </Layout>
    </ThemeProvider>
  );
}
