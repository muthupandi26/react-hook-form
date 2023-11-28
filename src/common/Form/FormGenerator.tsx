import FormDatePicker from "./FormDatePicker";
import FormDropdown from "./FormDropdown";
import FormInput from "./FormInput";

const FormGenerator = (props: any): JSX.Element => {
  const renderFormElements = (formFields: any) => {
    switch (formFields.type) {
      case "textfield":
        return (
          <FormInput
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
      case "dropdown":
        return (
          <FormDropdown
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
            options={props.options}
          />
        );
      case "date":
        return (
          <FormDatePicker
            {...formFields}
            control={props.control}
            errors={props.errors}
            rules={props.rules}
          />
        );
    }
  };
  return <>{renderFormElements(props)}</>;
};

export default FormGenerator;
