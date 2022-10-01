import { Box, FormControl, FormHelperText } from "@mui/material";
import { Component } from "react";
import "./Inputs.css";
interface InputsProps {
  label?: string;
  id?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value?: any;
  handleChange?: (e: any) => void;
  icon?: string;
  className?: any;
  accept?: string;
  name?: string;
  error?: string;
}
interface InputsState {}
export default class Inputs extends Component<InputsProps, InputsState> {
  render() {
    const {
      label,
      id,
      type,
      required,
      handleChange,
      value,
      placeholder,
      icon,
      className,
      name,
      accept,
      error,
    } = this.props;
    console.log({ error });
    return (
      <FormControl className="input--formcontrol">
        {label && (
          <label className="input--label" htmlFor={name}>
            {label}
            {required && <span>*</span>}
          </label>
        )}
        <Box className={`input--input ${className && className}`}>
          <input
            accept={accept && accept}
            type={type}
            id={id}
            name={name}
            required={required}
            placeholder={placeholder}
            className="input--input--1 "
            value={value}
            onChange={(e) => handleChange && handleChange(e)}
          />

          {icon && <img src={icon} alt={id} className="input--icons" />}
        </Box>

        {error && (
          <FormHelperText
            component={"p"}
            color="error"
            sx={{
              color: "#B00020",
            }}
          >
            {error}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}
