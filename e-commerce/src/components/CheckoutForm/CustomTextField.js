import { TextField, Grid } from '@mui/material';

const CustomTextField = ({ name, label, required, value, handleChange }) => {
  return (
    <Grid item xs={12} sm={6}>
      <TextField value={value} name={name} label={label} fullWidth required={required} onChange={handleChange}></TextField>
    </Grid>
  );
};

export { CustomTextField };
