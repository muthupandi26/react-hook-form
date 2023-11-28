import React from "react";
import { FormControl, InputBase, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import { OmegaSubHeaderTypography } from "../components";

const FormDatePicker = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  placeholder,
  style,
  disabled,
}: any): JSX.Element => {
  const combinedStyles = {
    ...style,
    width: "100%",
    border: "1px solid #F1F5F9",
    borderRadius: "5px",
    "& .MuiInputBase-input": {
      fontSize: "0.800rem",
      paddingLeft: "0.5rem",
      color: "dimgrey",
    },
  };

  return (
    <>
      <OmegaSubHeaderTypography>{label}</OmegaSubHeaderTypography>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <DatePicker
            // value={licenseDetails.expirationDate}
            onChange={(date) => field.onChange(date?.toString())}
            format="DD-MM-YYYY"
            render={
              <TextField
                fullWidth
                placeholder={label}
                variant="outlined"
                error={!!fieldState?.invalid}
                helperText={
                  fieldState?.invalid ? fieldState?.error?.message : ""
                }
              />
            }
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
