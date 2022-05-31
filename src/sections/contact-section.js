/** @jsx jsx */
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { Box, Button, Container, Grid, Input, Label, Textarea } from 'theme-ui';
import theme from 'theme';
import { Controller, useForm } from 'react-hook-form';
import SectionHeader from 'components/section-header';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const handleFormSubmit = () => {
    let formData = {
      name,
      email,
      phone,
      subject,
      message,
    };
    console.log(JSON.stringify(formData));
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
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            {/* Name */}
            <Label sx={styles.forms.label} htmlFor="name">
              Name:
            </Label>
            <Input
              sx={styles.forms.input}
              id="name"
              mb={3}
              onChange={(e) => setName(e.target.value)}
              {...register('name', { required: true, minLength: 5 })}
            />
            {errors?.name?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your name.</p>
            )}
            {errors?.name?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your name must at least consist of 5 characters.</p>
            )}
            {/* Email */}
            <Label sx={styles.forms.label} htmlFor="email">
              Email:
            </Label>
            <Input
              sx={styles.forms.input}
              type="email"
              id="email"
              mb={3}
              onChange={(e) => setEmail(e.target.value)}
              {...register('email', {
                required: true,
                minLength: 7,
                pattern: /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/,
              })}
            />
            {errors?.email?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your email.</p>
            )}
            {errors?.email?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 7 characters.</p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p sx={styles.forms.error}>Please enter a valid email address.</p>
            )}
            {/* Phone */}
            <Label sx={styles.forms.label} htmlFor="phone">
              Phone:
            </Label>
            <Input
              sx={styles.forms.input}
              type="tel"
              id="phone"
              mb={3}
              onChange={(e) => setPhone(e.target.value)}
              {...register('phone', { required: true, minLength: 10, pattern: /([\d])/ })}
            />
            {errors?.phone?.type === 'required' && (
              <p sx={styles.forms.error}>Please enter your phone number.</p>
            )}
            {errors?.phone?.type === 'minLength' && (
              <p sx={styles.forms.error}>Your email must at least consist of 10 digits.</p>
            )}
            {errors?.phone?.type === 'pattern' && (
              <p sx={styles.forms.error}>The phone number must contain digits only.</p>
            )}
            {/* Subject */}
            <Label sx={styles.forms.label} htmlFor="subject">
              Subject:
            </Label>
            <Input
              sx={styles.forms.input}
              type="text"
              name="subject"
              id="subject"
              mb={3}
              onChange={(e) => setSubject(e.target.value)}
              {...register('subject', { required: true })}
            />
            {errors?.subject?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the subject.</p>
            )}
            {/* Message */}
            <Label sx={styles.forms.label} htmlFor="message">
              Message:
            </Label>
            <Textarea
              sx={styles.forms.textarea}
              id="message"
              rows={6}
              mb={3}
              onChange={(e) => setMessage(e.target.value)}
              {...register('message', { required: true })}
            />
            {errors?.message?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the message.</p>
            )}
            {/* Submit Button */}
            <hr sx={theme.styles.hr} />
            <Button type="submit">Send my Message</Button>
            {'  '}
            <Button type="reset">Start Over</Button>
          </form>

          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.970538863928!2d28.18862976502242!3d-25.837516083602495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956592df5e7b75%3A0x3e72ee6cc1ec6d5a!2sWaterford%20Office%20Park!5e0!3m2!1sen!2sza!4v1653977590962!5m2!1sen!2sza"
              height="600"
              allowFullScreen=""
              loading="lazy"
              sx={styles.forms.map}
              referrerPolicy="no-referrer-when-downgrade"></iframe>
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
    error: {
      color: 'primary',
    },
  },
};
