/** @format */
import React, { Component } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";
import { TeamData } from "../../utils/data/expertTeam/team";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteOutline } from "@mui/icons-material";
import "./specialist.css";
import DeleteModal from "../common/DeleteModal/DeleteModal";
import EditTeam from "./EditTeam";
import { Styles } from "./specialist.styles";
import { withStyles } from "@mui/styles";

interface IProps {
	team: TeamData;
	classes?: any;
}

interface State {
	open: boolean;
	openEditModal: boolean;
}
class SpecialistCard extends Component<IProps, State> {
	state: State = {
		open: false,
		openEditModal: false,
	};
	onClose = () => {
		this.setState({ open: false });
	};
	onClickFunc = () => {
		this.setState({ open: true });
	};
	onEditFunc = () => {
		this.setState({ openEditModal: true });
	};
	closeEditModal = () => {
		this.setState({ openEditModal: false });
	};
	render() {
		const { team, classes } = this.props;
		return (
			<>
				<Card className="special-team">
					<Box sx={{ position: "relative" }} className="">
						<div className="hero"></div>
						<CardMedia
							component={"img"}
							src={team.imgeUrl}
							className={classes.specialImg}
							alt={team.title}></CardMedia>
					</Box>
					<CardContent
						className="special-team-content"
						sx={{
							bgcolor: "#FFF2E4",
							color: "black",
							borderBottomLeftRadius: "10px",
							borderBottomRightRadius: "10px",
						}}>
						<Typography variant="h3" align="center">
							{team.title}
						</Typography>
						<Typography
							align="center"
							variant="body2"
							sx={{ color: "#88878F", marginTop: "10px" }}>
							{team.position}
						</Typography>
					</CardContent>
					<ButtonGroup
						className="groupButtons"
						variant="outlined"
						aria-label="split button">
						<Button
							onClick={this.onEditFunc}
							className="buttonTogether edit"
							startIcon={<EditIcon />}>
							Edit
						</Button>
						<Button
							onClick={this.onClickFunc}
							className="buttonTogether delete"
							startIcon={<DeleteOutline />}>
							Delete
						</Button>
					</ButtonGroup>
				</Card>
				<DeleteModal
					jobTitle="Specialist"
					open={this.state.open}
					onClose={this.onClose}
				/>
				<EditTeam
					open={this.state.openEditModal}
					onClose={this.closeEditModal}
				/>
			</>
		);
	}
}
export default withStyles(Styles)(SpecialistCard);
