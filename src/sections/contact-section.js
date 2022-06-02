/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Box, Button, Container, Grid, Input, Label, Textarea } from 'theme-ui';
import theme from 'theme';
import { Controller, useForm } from 'react-hook-form';
import { GrSend, GrPowerReset } from 'react-icons/gr';
import SectionHeader from 'components/section-header';

export default function ContactSection() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const handleFormSubmit = (data) => {
    console.log(JSON.stringify(data));
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
            <Controller
              name="name"
              control={control}
              rules={{ required: true, minLength: 5 }}
              render={({ field }) => <Input id="name" sx={styles.forms.input} mb={3} {...field} />}
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
            <Controller
              name="email"
              control={control}
              rules={{
                required: true,
                minLength: 7,
                pattern: /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/,
              }}
              render={({ field }) => (
                <Input id="email" type="email" sx={styles.forms.input} mb={3} {...field} />
              )}
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
            <Controller
              name="phone"
              control={control}
              rules={{ required: true, minLength: 5, pattern: /([\d])/ }}
              render={({ field }) => (
                <Input id="phone" type="tel" sx={styles.forms.input} mb={3} {...field} />
              )}
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
            <Controller
              name="subject"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input id="subject" sx={styles.forms.input} mb={3} {...field} />
              )}
            />
            {errors?.subject?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the subject.</p>
            )}
            {/* Message */}
            <Label sx={styles.forms.label} htmlFor="message">
              Message:
            </Label>
            <Controller
              name="message"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Textarea id="message" rows={6} mb={3} {...field} />}
            />
            {errors?.message?.type === 'required' && (
              <p sx={styles.forms.error}>Please fill in the message.</p>
            )}
            {/* Submit Button */}
            <hr sx={theme.styles.hr} />
            <Button type="submit">
              <GrSend /> Send It
            </Button>
            {'  '}
            <Button type="reset">
              <GrPowerReset /> Start Over
            </Button>
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
