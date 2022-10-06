import {
  Box,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
} from "@mui/material";
import { Component } from "react";
import { optionsBanksname } from "../../../utils/data/businessdetailsandPayout/Busness.data";
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
  isSelect?: boolean | false;
  options?: optionsBanksname[];
}
interface InputsState {
  error: string;
}
export default class Inputs extends Component<InputsProps, InputsState> {
  constructor(props: InputsProps) {
    super(props);
    this.state = {
      error: "",
    };
  }
  // handleValidateEmail = (e: any) => {
  //   const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   const str = e.target.value;

  //   if (!pattern.test(str)) {
  //     this.setState({ error: "Email is not valid" });
  //   } else {
  //     this.setState({ error: "" });
  //   }
  // };
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
      isSelect,
      options,
    } = this.props;

    return (
      <FormControl className="input--formcontrol">
        {label && (
          <label className="input--label" htmlFor={name}>
            {label}
            {required && <span>*</span>}
          </label>
        )}
        {!isSelect ? (
          <>
            {type === "textarea" ? (
              <>
                <Box className={`input--input ${className && className}`}>
                  <textarea
                    id={id}
                    rows={3}
                    name={name}
                    required={required}
                    placeholder={placeholder}
                    className="input--input--1 "
                    value={value}
                    onChange={(e) => {
                      handleChange && handleChange(e);
                    }}
                  ></textarea>

                  {icon && <img src={icon} alt={id} className="input--icons" />}
                </Box>
              </>
            ) : (
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
                  onChange={(e) => {
                    handleChange && handleChange(e);
                  }}
                />

                {icon && <img src={icon} alt={id} className="input--icons" />}
              </Box>
            )}
          </>
        ) : (
          <Box>
            <Select
              name={name}
              id={"select"}
              labelId={id}
              onChange={handleChange}
              placeholder={"select the bank "}
              sx={{
                width: "100%",
                bgcolor: "#f0f0f0",
                color: "#a1a1a1",
                fontSize: "17px",
              }}
              value={value}
            >
              {options ? (
                options.map((option: optionsBanksname) => {
                  return (
                    <MenuItem key={option.id} value={option.title}>
                      <Box
                        sx={{
                          width: "100%",
                          py: 2,
                          height: "30px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {option.icon && (
                          <img
                            style={{
                              width: "20px",
                              height: "20px",
                              objectFit: "contain",
                            }}
                            src={option.icon}
                            alt={`${option.id}`}
                            className={"select-option-img"}
                          />
                        )}

                        <span style={{ width: "80%" }}>{option.title}</span>
                      </Box>
                    </MenuItem>
                  );
                })
              ) : (
                <p>no options</p>
              )}
            </Select>
          </Box>
        )}

        {(error || this.state.error) && (
          <FormHelperText
            component={"p"}
            color="error"
            sx={{
              color: "#B00020",
            }}
          >
            {(error && error) || (this.state.error && this.state.error)}
          </FormHelperText>
        )}
      </FormControl>
    );
  }
}
