/** @format */

import { ButtonGroup, Button } from "@mui/material";
import React, { Component } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteOutline } from "@mui/icons-material";
import "./buttons.css";
interface IProps {
	onClickEdit: any;
	onClickDelete: any;
}
export default class EditDeleteCommonButton extends Component<IProps> {
	render() {
		return (
			<ButtonGroup
				className="groupButtons"
				variant="outlined"
				aria-label="split button">
				<Button
					onClick={this.props.onClickEdit}
					className="buttonTogether edit"
					startIcon={<EditIcon />}>
					Edit
				</Button>
				<Button
					onClick={this.props.onClickDelete}
					className="buttonTogether delete"
					startIcon={<DeleteOutline />}>
					Delete
				</Button>
			</ButtonGroup>
		);
	}
}
