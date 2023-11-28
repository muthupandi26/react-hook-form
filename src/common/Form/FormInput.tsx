import { Controller } from "react-hook-form";
import { Box, TextField } from "@mui/material";
import { OmegaSubHeaderTypography } from "../components/OmegaSubHeaderTypography";

const FormInput = ({
  name,
  control,
  rules,
  label,
  defaultValue,
}: any): JSX.Element => {
  return (
    <>
      <OmegaSubHeaderTypography>{label}</OmegaSubHeaderTypography>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            placeholder={label}
            fullWidth
            error={!!fieldState?.invalid}
            helperText={fieldState?.invalid ? fieldState?.error?.message : ""}
            {...field}
          />
        )}
      />
    </>
  );
};

export default FormInput;
