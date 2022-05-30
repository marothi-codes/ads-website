/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
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
  },
};
