import * as React from "react";
import { modalConstants } from "../../utils/data/constants/loginRegistration";
import { Drawers } from "../common";

interface RegisteredNowPageProps {
  open: boolean;
  toogleDrawer: (type?: string) => void;
}

interface RegisteredNowPageState {}

class RegisteredNowPage extends React.Component<
  RegisteredNowPageProps,
  RegisteredNowPageState
> {
  render() {
    return (
      <Drawers
        open={this.props.open}
        toggleDrawer={() => this.props.toogleDrawer(modalConstants.REGISTER_DRAWER)}
      >
        rgfgnfdgnng
      </Drawers>
    );
  }
}

export default RegisteredNowPage;
