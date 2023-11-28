import { Grid } from "@mui/material";

import FormGenerator from "./FormGenerator";

const FormBuilder = (props: any): JSX.Element => {
  const formFields = props.formFields();
  console.log("Arrays", props.errors, formFields);
  return (
    <>
      <Grid container>
        {formFields.map((field: any, index: number) => {
          return (
            <Grid item margin={2} xs={5} key={index}>
              <FormGenerator
                {...field}
                control={props.control}
                errors={props.errors}
                rules={field.rules}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default FormBuilder;
