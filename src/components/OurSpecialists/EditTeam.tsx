/** @format */
import React, { Component } from "react";
import { Box, Button, Container, Dialog, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import member from "../../assets/images/expertTeamSection/member1.png";
import { Stack } from "@mui/system";
import EditImage from "../OffersSection/EditImage";
import CloseIcon from "@mui/icons-material/Close";
import ClassIcon from "@mui/icons-material/Class";
import { withStyles } from "@mui/styles";
import { StylesOffers } from "../OffersSection/BestOffers.styles";
interface IProps {
	open: boolean;
	onClose: any;
	classes:any;
	editImage: string;
	handleOnChangeImage: (id:any) => void;
	editId: string;
	onClicOfCloseBadge:(id:any) => void;
	onSubmitEditModel: (id:any) => void;
}

class EditTeam extends Component<IProps> {
	render() {
		const {classes} = this.props
		return (
<>
<Container>
				<Dialog
					disableScrollLock={true}
					open={this.props.open}
					onClose={this.props.onClose}
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
								<EditImage editId={this.props.editId} editImage={this.props.editImage} onClicOfCloseBadge={this.props.onClicOfCloseBadge} handleOnChangeImage={this.props.handleOnChangeImage} />
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
												Name Of Specialist
											</Typography>
											<TextField
												fullWidth
												variant="standard"
												InputProps={{ disableUnderline: true }}
												placeholder="Name of specialist"
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
												Job Type
											</Typography>
											<TextField
												fullWidth
												variant="standard"
												InputProps={{ disableUnderline: true }}
												placeholder="Job type"
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
								</Grid>
								<Grid container xs={12} md={12} sm={12} lg={12}>
										<Grid item xs={6} md={6} lg={6}>
											<Box
											onClick={this.props.onSubmitEditModel}
												className={classes.ModelSaveButton}>
												<Button
												onClick={this.props.onSubmitEditModel}
													startIcon={<ClassIcon />}
													className={classes.ModelSaveText}>
													Save
												</Button>
											</Box>
										</Grid>

										<Grid item xs={6} md={6} lg={6}>
											<Box
												className={classes.ModelDeleteButton}>
												<Button
													startIcon={<CloseIcon />}
													onClick={this.props.onClose}
													className={classes.ModelDeleteText}>
													Cancel
												</Button>
											</Box>
										</Grid>
									</Grid>
							</Grid>
						</Grid>
					</Box>
				</Dialog>
			</Container>
</>
		);
	}
}

export default withStyles(StylesOffers)(EditTeam);
