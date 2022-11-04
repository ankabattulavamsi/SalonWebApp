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
	imgeUrl: string,
	editId: string
}
class SpecialistCard extends Component<IProps, State> {
	state: State = {
		open: false,
		openEditModal: false,
		imgeUrl: '',
		editId: ''
	};

	onSubmitEditModel = () => {
		this.setState({ openEditModal: false });
	}
	handleOnChangeImage = (e: any) => {
		this.setState({ imgeUrl: URL.createObjectURL(e.target.files[0]) });
	};

	onClose = () => {
		this.setState({ open: false });
	};
	onClickFunc = () => {
		this.setState({ open: true });
	};
	onEditFunc = (item:any) => {
		this.setState({ editId: item.id });
		this.setState({ openEditModal: true });
		this.setState({ imgeUrl: item.imgeUrl });
	};
	closeEditModal = () => {
		this.setState({ openEditModal: false });
	};

	handleCloseBage = () => {
		this.setState({imgeUrl: ''})
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
							onClick={() => this.onEditFunc(team)}
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
					editImage={this.state.imgeUrl}
					handleOnChangeImage={this.handleOnChangeImage}
					editId={this.state.editId}
					onClicOfCloseBadge={this.handleCloseBage}
onSubmitEditModel={this.onSubmitEditModel}
				/>
			</>
		);
	}
}
export default withStyles(Styles)(SpecialistCard);
