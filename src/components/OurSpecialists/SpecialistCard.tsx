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

interface IProps {
	team: TeamData;
}

export default class SpecialistCard extends Component<IProps> {
	render() {
		const { team } = this.props;
		return (
			<>
				<Card className="special-team">
					<Box>
						<CardMedia
							component={"img"}
							src={team.imgeUrl}
							sx={{
								height: "400px",
								display: "block",
								objectFit: "fill !important",
								justifyContent: "center",
								margin: "auto",
							}}
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
							sx={{ color: "#88878F !important", marginTop: "10px" }}>
							{team.position}
						</Typography>
					</CardContent>
					<ButtonGroup
						className="groupButtons"
						variant="outlined"
						aria-label="split button">
						<Button
							className="buttonTogether edit"
							startIcon={<EditIcon />}>
							Edit
						</Button>
						<Button
							className="buttonTogether delete"
							startIcon={<DeleteOutline />}>
							Delete
						</Button>
					</ButtonGroup>
				</Card>
			</>
		);
	}
}
