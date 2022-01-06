import { Autocomplete, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "./Api";

function App() {
  const [data, setData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    getData().then((res) => {
      setData(res.data);

      const provinces = res.data.map((province) => {
        return [province.name, province.code];
      });
      setProvinces(provinces);
    });
  }, []);
  return (
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <Autocomplete
          sx={{ width: 300 }}
          options={provinces}
          autoComplete={true}
          getOptionLabel={(option) => option.name}
          // onChange={(event, value) => {
          //     setCountriesSelected(value)
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tỉnh/Thành phố"
              autoComplete="city"
              helperText="Lựa chọn tỉnh/thành phố"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Autocomplete
          sx={{ width: 300 }}
          //options={countries}
          autoComplete={true}
          getOptionLabel={(option) => option.Country}
          // onChange={(event, value) => {
          //     setCountriesSelected(value)
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Quốc gia"
              autoComplete="country"
              helperText="Lựa chọn quốc gia"
            />
          )}
        />
      </Grid>
      <Grid item xs={4}>
        <Autocomplete
          sx={{ width: 300 }}
          //options={countries}
          autoComplete={true}
          getOptionLabel={(option) => option.Country}
          // onChange={(event, value) => {
          //     setCountriesSelected(value)
          // }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Quốc gia"
              autoComplete="country"
              helperText="Lựa chọn quốc gia"
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default App;
