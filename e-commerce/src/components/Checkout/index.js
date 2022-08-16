import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../plugins/commerce';
import { CheckoutForm } from '../CheckoutForm';
import { PaymentForm } from '../PaymentForm';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();

  const nextStep = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
  };
  const backStep = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep - 1;
    });
  };

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) {
            history.push('/');
          }
        }
      };

      generateToken();
    }
  }, [cart]);

  const test = (data) => {
    setShippingData(data);

    nextStep();
  };

  let Confirmation = () => {
    if (order.customer) {
      return (
        <>
          <div>
            <Typography variant="h5">{`Thank you for your purchase, ${order.customer.firstname} ${order.customer.lastname}!`}</Typography>
            <Divider
              className={css`
                margin: 20px 0;
              `}
            />
            <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
          </div>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">
            {'Back to home'}
          </Button>
        </>
      );
    }
    return (
      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <CircularProgress />
      </div>
    );
  };

  if (error) {
    Confirmation = () => {
      return (
        <>
          <Typography variant="h5">Error: {error}</Typography>
          <br />
          <Button component={Link} variant="outlined" type="button" to="/">
            {'Back to home'}
          </Button>
        </>
      );
    };
  }

  const Form = () => {
    if (activeStep === 0) {
      return <CheckoutForm checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} test={test} />;
    }
    return <PaymentForm checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} />;
  };

  const renderStep = ({}) => {
    if (activeStep === steps.length) {
      return <Confirmation />;
    }
    if (checkoutToken) {
      return <Form />;
    }
  };

  return (
    <main
      className={css`
        margin-top: 5%;
        width: 600px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (max-width: 768px) {
          width: auto;
          margin-left: 2vw;
          margin-right: 2vw;
        }
      `}
    >
      <Paper
        className={css`
          margin-top: 6vh;
          margin-bottom: 6vh;
          padding: 2vw;
          @media screen and (max-width: 768px) {
            width: 100%;
            margin-top: 60px;
          }
        `}
      >
        <Typography variant="h4" align="center">
          {'Checkout'}
        </Typography>
        <Stepper
          activeStep={activeStep}
          className={css`
            padding: 3vw 0 5vw;
          `}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {renderStep({})}
      </Paper>
    </main>
  );
};

export { Checkout };
