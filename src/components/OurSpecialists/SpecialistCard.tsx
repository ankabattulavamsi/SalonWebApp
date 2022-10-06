/** @format */
import React, { Component } from "react";
import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardContent,
	CardMedia,
	Divider,
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
				<Card
					className="special-team"
					sx={{
						width: 345,
						// boxShadow: "none",
						// borderRadius: "10px",
						// mb: 5,
						// overflow: "visible",
						// alignSelf: "center",
						// position: "relative",
					}}>
					<Box sx={{}}>
						<CardMedia
							height="400px"
							// width={"90%"}
							component={"img"}
							src={team.imgeUrl}
							sx={{
								display: "block",
								// position: "absolute",
								// top: "-100px",
								objectFit: "cover",
								justifyContent: "center",
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
