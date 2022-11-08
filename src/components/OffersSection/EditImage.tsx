/** @format */

import React, { Component } from "react";
import { Badge, Box, Typography, Icon } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { galleryUploadIcon } from "../../utils/data/GalleryOwner/Gallery";

interface IsAddNewProps {
	// editImage: string;
	// editId: string;
	handleOnChangeImage: (id: any) => void;
	onClicOfCloseBadge: (id: any) => void;
    
    editImage: string;
    editId: string
}


export default class EditImage extends Component<
	IsAddNewProps
> {
	handleCloseBage = () => {
		this.setState({
			
			//   id:this.state.editId
		});
	};

	render() {
		// const { editId, editImage, handleOnChangeImage, onClicOfCloseBadge } =
		// 	this.props;
		return (
			<Box sx={{ postion: "relative" }}>
				<Box
					sx={{
						postion: "relative",
						width: { md: "350px", xs: "100%" },
						mx: "auto",
						height: "300px!important",
					}}>
					{this.props.editImage === "" && this.props.editImage === "" ? (
						<>
							<Box sx={{ position: "relative" }}>
								<input
									name={"image"}
									id="image"
									accept="*"
									type="file"
									onChange={(e) => this.props.handleOnChangeImage(e)}
									style={{
										opacity: 0,
										position: "relative",
										width: "100%",
										height: "289px",
										top: 0,
										bottom: 0,
										left: 0,
										right: 0,
										zIndex: 1,
									}}
								/>
								{/* <ErrorMessage name="image" /> */}
								<Box
									sx={{
										bgcolor: "#f0f0f0",
										position: "absolute",
										top: 0,
										left: 0,
										right: 0,
										bottom: 0,
										padding: "32px 40px",
										height: "100%",
										width: "100%",
										borderRadius: "4px 4px 0px 0px",
									}}>
									<Box
										sx={{
											border: "2px dashed #A4A1A1",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											height: "100%",
											width: "100%",
											flexDirection: "column",
										}}>
										<Box>
											<img
												src={galleryUploadIcon}
												style={{
													width: "64px",
													height: "64px",
													objectFit: "contain",
												}}
												alt="images"
											/>
										</Box>
										<Box>
											<Typography
												component={"h5"}
												sx={{
													fontSize: {
														xs: "16px",
														md: "18px",
														lg: "20px",
													},
													color: "#272522",
													fontWeight: "600",
													textTransform: "capitalize",
													textAlign: "center",
												}}>
												Upload Offers Image
											</Typography>
										</Box>
										<Box>
											<Typography
												sx={{
													fontSize: {
														xs: "10px",
														sm: "12px",
														md: "14px",
														lg: "16px",
													},
													color: "#A4A1A1",
													fontWeight: "500",
													textTransform: "lowercase",
													textAlign: "center",
												}}>
												Supported files PNG, JPEG, SVG, wEBP
											</Typography>{" "}
										</Box>
									</Box>
								</Box>
							</Box>
						</>
					) : this.props.editImage && this.props.editId !== "" ? (
						<img
							src={this.props.editImage}
							alt="{item.title}"
							style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "90%",
                            }}
						/>
					) : (
						<img
							src={this.props.editImage}
							alt="{title}"
							style={{
                                objectFit: "cover",
                                width: "90%",
                                height: "90%",
                            }}
						/>
					)}
				</Box>

				<Box
					marginTop={3}
					display={"flex"}
					justifyContent={"flex-start"}
					gap={2}
					flexWrap="wrap">
					<Box width={"120px"} height="50%">
						<>
							{this.props.editImage === "" &&
							this.props.editImage === "" ? (
								<>
							
								</>
							) : this.props.editImage && this.props.editId !== "" ? (
								<Badge
									color="secondary"
									badgeContent={
										<CloseIcon
											onClick={this.props.onClicOfCloseBadge}
											sx={{
												bgcolor: "#272727",
												color: "#fff",
												borderRadius: "50%",
												fontSize: "1rem",
											}}
										/>
									}>
									<img
										src={this.props.editImage && this.props.editImage}
										alt="fesdga "
										style={{
											objectFit: "contain",
											width: "120px",
											height: "80px",
										}}
									/>
								</Badge>
							) : (
								<Badge
									color="secondary"
									badgeContent={
										<CloseIcon
											onClick={this.props.onClicOfCloseBadge}
											sx={{
												bgcolor: "#272727",
												color: "#fff",
												borderRadius: "50%",
												fontSize: "1rem",
											}}
										/>
									}>
									<img
										src={this.props.editImage}
										alt=""
										style={{
											objectFit: "contain",
											width: "100%",
											height: "100%",
										}}
									/>
								</Badge>
							)}
						</>
					</Box>
				</Box>
			</Box>
		);
	}
}
