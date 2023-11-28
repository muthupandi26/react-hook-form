import { Controller, useForm } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { OmegaSubHeaderTypography } from "../components/OmegaSubHeaderTypography";
import { useEffect } from "react";

const FormDropdown = ({
  name,
  control,
  rules,
  label,
  errors,
  defaultValue,
  additionalType,
  placeholder,
  style,
  disabled,
  options,
}: any): JSX.Element => {
  return (
    <>
      <OmegaSubHeaderTypography>{label}</OmegaSubHeaderTypography>

      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <Autocomplete
            options={options}
            getOptionLabel={(option) => option.label}
            value={
              options.find((option: any) => option.value === field.value) ||
              null
            }
            onChange={(_, value) => field.onChange(value?.value || "")}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={label}
                fullWidth
                error={!!fieldState?.invalid}
                helperText={
                  fieldState?.invalid ? fieldState?.error?.message : ""
                }
              />
            )}
          />
        )}
      />
    </>
  );
};

export default FormDropdown;
