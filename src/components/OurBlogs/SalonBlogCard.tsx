/** @format */

import React, { Component } from "react";
import { withStyles } from "@mui/styles";
import { BlogStyles } from "./OurBlog.Style";
import { Box, Grid, Typography } from "@mui/material";
import { blogsData } from "../../utils/data/blogs/blogs_data";
import BlogEditModal from "./BlogEditModal";
import DeleteModal from "../common/DeleteModal/DeleteModal";
import EditDeleteCommonButton from "../common/CommonButtons/EditDeleteCommonButton";

interface blogProps {
	classes: any;
}
interface salonBlogS {
	cardActive: number;
	edit: boolean;
	delModal: boolean;
	editId: string;
	editImage: string;
	editDescription: string;
}
class SalonBlogCard extends Component<blogProps, salonBlogS> {
	state: salonBlogS = {
		cardActive: 0,
		edit: false,
		delModal: false,
		editId: "",
		editImage: "",
		editDescription: "",
	};

	onClickOpenEditModel = (item: any) => {
		this.setState({ editId: item.id });
		this.setState({ editImage: item.image });
		this.setState({ editDescription: item.description });
		this.setState({ edit: true });
	};

	handlecardActive = (id: number) => {
		this.setState({ cardActive: id });
	};
	render() {
		const { classes } = this.props;
		return (
			<>
				<Grid
					container
					alignItems="center"
					justifyContent="center"
					columnSpacing={4}
					rowSpacing={3}
					sx={{ px: { sm: 4, xs: 2, md: 4, lg: 4 } }}>
					{blogsData.map((item) => {
						return (
							<Grid item lg={3} md={4} xs={12} sm={6} key={item.id}>
								<Box
									className={classes.salonBlogCard}
									onMouseEnter={() => this.handlecardActive(item.id)}
									onMouseLeave={() => this.setState({ cardActive: 0 })}>
									<Box sx={{ position: "relative" }}>
										<img
											height="230"
											width="100%"
											src={item.image}
											alt="blog 1"
										/>
										<Box
											sx={{
												width: { sm: "20%", md: "30%", lg: "20%" },
												position: "absolute",
												left: "40%",
												top: "78%",
												py: 1,
												px: 2,
												background:
													this.state.cardActive === item.id
														? "#E7A356"
														: "#272522",
												color:
													this.state.cardActive === item.id
														? "#fff"
														: "#E7A356",
												borderRadius: "5px",
											}}>
											<Typography className={classes.blogDate}>
												{item.date}
											</Typography>
											<Typography className={classes.blogMonth}>
												{item.month}
											</Typography>
										</Box>
									</Box>
									<Typography className={classes.salonBlogCardTitle}>
										{item.name}
									</Typography>
									<Typography className={classes.salonBlogCardText}>
										{item.description}
									</Typography>
									<div style={{ padding: "0px 40px" }}>
										<EditDeleteCommonButton
											onClickEdit={() => this.setState({ edit: true })}
											onClickDelete={() =>
												this.setState({ delModal: true })
											}
										/>
									</div>
								</Box>
							</Grid>
						);
					})}
				</Grid>
				<BlogEditModal
					open={this.state.edit}
					close={() => this.setState({ edit: false })}
				/>
				<DeleteModal
					open={this.state.delModal}
					onClose={() => this.setState({ delModal: false })}
					jobTitle="Blog"
				/>
			</>
		);
	}
}
export default withStyles(BlogStyles)(SalonBlogCard);
