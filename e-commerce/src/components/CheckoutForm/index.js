import React, { useState, useEffect } from 'react';
import { InputLabel, TextField, Select, MenuItem, Button, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { commerce } from '../../plugins/commerce';
import { CustomTextField } from './CustomTextField';

const CheckoutForm = ({ checkoutToken, test }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, []);

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { firstName, lastName, address, email, city, zip, shippingCountry, shippingSubdivision, shippingOption };
    test({ ...formData });
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeZipCode = (e) => {
    setZip(e.target.value);
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <form onSubmit={handleSubmit} className="form">
        <Grid container spacing={3}>
          <CustomTextField value={firstName} required name="firstName" label="First name" handleChange={handleChangeFirstName} />
          <CustomTextField value={lastName} required name="lastName" label="Last name" handleChange={handleChangeLastName} />
          <CustomTextField value={address} required name="address" label="Address" handleChange={handleChangeAddress} />
          <CustomTextField value={email} required name="email" label="Email" handleChange={handleChangeEmail} />
          <CustomTextField value={city} required name="city" label="City" handleChange={handleChangeCity} />
          <CustomTextField value={zip} required name="zip" label="Zip / Postal code" handleChange={handleChangeZipCode} />
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Country</InputLabel>
            <Select
              value={shippingCountry}
              fullWidth
              onChange={(e) => {
                setShippingCountry(e.target.value);
              }}
            >
              {Object.entries(shippingCountries)
                .map(([code, name]) => {
                  return { id: code, label: name };
                })
                .map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Subdivision</InputLabel>
            <Select
              value={shippingSubdivision}
              fullWidth
              onChange={(e) => {
                setShippingSubdivision(e.target.value);
              }}
            >
              {Object.entries(shippingSubdivisions)
                .map(([code, name]) => {
                  return { id: code, label: name };
                })
                .map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel>Shipping Options</InputLabel>
            <Select
              value={shippingOption}
              fullWidth
              onChange={(e) => {
                setShippingOption(e.target.value);
              }}
            >
              {shippingOptions
                .map((sO) => {
                  return { id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` };
                })
                .map((item) => {
                  return (
                    <MenuItem key={item.id} value={item.id}>
                      {item.label}
                    </MenuItem>
                  );
                })}
            </Select>
          </Grid>
        </Grid>
        <br />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button component={Link} variant="outlined" to="/cart">
            Back to Cart
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export { CheckoutForm };
