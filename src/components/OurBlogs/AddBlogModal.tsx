/** @format */
import React, { Component } from "react";
import {
	Box,
	Button,
	Dialog,
	TextField,
	Typography,
	Container,
	IconButton,
	Divider,
	Grid,
} from "@mui/material";
import ImageUpload from "../OffersSection/ImageUpload";
import { StylesOffers } from "../OffersSection/BestOffers.styles";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import ClassIcon from "@mui/icons-material/Class";
interface IProps {
	open: boolean;
	onClose: any;
	classes?: any;
}

class AddNewBlog extends Component<IProps> {
	state = {
		profileImg:
			"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
	};
	imageHandler = (e: any) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				this.setState({ profileImg: reader.result });
			}
		};
		reader.readAsDataURL(e.target.files[0]);
	};
	render() {
		const { classes } = this.props;
		return (
			<Container>
				<Dialog
					disableScrollLock={true}
					onClose={this.props.onClose}
					open={this.props.open}
					maxWidth="md"
					className="offers-dialog-box">
					<Box
						sx={{
							bgcolor: "transparent",
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							width: "100%",
							position: "relative",
							height: "3rem",
							background: "transparent",
						}}
						className="best-offers-close-container">
						<IconButton
							aria-label="close"
							onClick={this.props.onClose}
							sx={{
								position: "absolute",
								right: -10,
								top: "-10%",
								color: "#fff",
							}}>
							<CloseIcon style={{ width: "42px" }} />
						</IconButton>
					</Box>
					<Divider />
					<Box sx={{ p: 3, backgroundColor: "#fff" }}>
						<Grid container spacing={2}>
							<Grid item xs={12} md={6} sm={6} lg={6}>
								<ImageUpload addImgTitle='Upload Blog Image' />
							</Grid>

							<Grid item xs={12} md={6} sm={6} lg={6}>
								<Grid container xs={12} md={12} sm={12} lg={12}>
									<Grid item xs={12} md={12} sm={12} lg={12}>
										<Box sx={{ mb: 2 }}>
											<Typography
												sx={{
													color: "#272522",
													fontSize: "17px",
													fontFamily: "Roboto",
													fontWeight: "500",
													lineHeight: "30px",
												}}>
												Blog Title
											</Typography>
											<TextField
												fullWidth
												variant="standard"
												InputProps={{ disableUnderline: true }}
												placeholder="Blog title"
												// value={editOfferTitle}
												// onChange={this.props.onChangeeditOfferTitle}
												sx={{
													backgroundColor: "#F0F0F0",
													borderRadius: "5px",
													height: "50px",
													justifyContent: "center",
													pl: 2,
												}}
											/>
										</Box>
									</Grid>
									<Grid
										sx={{ margin: "30px 0" }}
										item
										xs={12}
										md={12}
										sm={12}
										lg={12}>
										<Box sx={{ mb: 2 }}>
											<Typography
												sx={{
													color: "#272522",
													fontSize: "17px",
													fontFamily: "Roboto",
													fontWeight: "500",
													lineHeight: "30px",
												}}>
												Blog Description
											</Typography>
											<TextField
												fullWidth
												multiline
												rows={4}
												variant="standard"
												InputProps={{ disableUnderline: true }}
												placeholder="Long descreption type here..."
												// onChange={this.props.onChangeDescription}
												// value={editDescription}
												sx={{
													backgroundColor: "#F0F0F0",
													borderRadius: "5px",
													justifyContent: "center",
													pl: 2,
												}}
											/>
										</Box>
									</Grid>
								</Grid>
								<Grid container xs={12} md={12} sm={12} lg={12}>
									<Grid item xs={12} md={12} lg={12}>
										<Box
											sx={{ marginRight: "0px" }}
											className={classes.ModelSaveButton}
											onClick={this.props.onClose}>
											<Button
												startIcon={<ClassIcon />}
												className={classes.ModelSaveText}>
												Add New Blog
											</Button>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Box>
				</Dialog>
			</Container>
		);
	}
}

export default withStyles(StylesOffers)(AddNewBlog);
