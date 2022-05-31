/** @jsx jsx */
import { useState } from 'react';
import { Grid, jsx } from 'theme-ui';
import { Box, Button, Container, Input, Label, Textarea } from 'theme-ui';
import SectionHeader from 'components/section-header';
import theme from 'theme';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" sx={{ variant: 'section.contact' }}>
      <Container>
        <hr sx={theme.styles.hr} />

        <br />
        <SectionHeader slogan="LET US SOLVE YOUR PROBLEM" title="Contact Amanzunza" />
        <hr sx={theme.styles.hr} />
        <br />

        <Grid gap={2} columns={[1, 1, 2]}>
          <Box as="form" onSubmit={(e) => handleFormSubmit(e)}>
            {/* Name */}
            <Label sx={styles.forms.label} htmlFor="name">
              Name:
            </Label>
            <Input
              sx={styles.forms.input}
              name="name"
              id="name"
              mb={3}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {/* Email */}
            <Label sx={styles.forms.label} htmlFor="email">
              Email:
            </Label>
            <Input
              sx={styles.forms.input}
              type="email"
              name="email"
              id="email"
              mb={3}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Phone */}
            <Label sx={styles.forms.label} htmlFor="phone">
              Phone:
            </Label>
            <Input
              sx={styles.forms.input}
              type="phone"
              name="phone"
              id="phone"
              mb={3}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {/* Subject */}
            <Label sx={styles.forms.label} htmlFor="subject">
              Subject:
            </Label>
            <Input
              sx={styles.forms.input}
              type="subject"
              name="subject"
              id="subject"
              mb={3}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            {/* Message */}
            <Label sx={styles.forms.label} htmlFor="message">
              Message:
            </Label>
            <Textarea
              sx={styles.forms.textarea}
              name="message"
              id="message"
              rows={6}
              mb={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* Submit Button */}
            <hr sx={theme.styles.hr} />
            <Button type="submit">Send my Message</Button>
            {'  '}
            <Button type="reset">Start Over</Button>
          </Box>

          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.970538863928!2d28.18862976502242!3d-25.837516083602495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956592df5e7b75%3A0x3e72ee6cc1ec6d5a!2sWaterford%20Office%20Park!5e0!3m2!1sen!2sza!4v1653977590962!5m2!1sen!2sza"
              height="600"
              allowfullscreen=""
              loading="lazy"
              sx={styles.forms.map}
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Box>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px primary`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
    map: {
      width: '100%',
      border: '0',
    },
  },
};
