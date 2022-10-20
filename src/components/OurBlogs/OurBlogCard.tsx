/** @format */

import { Box, Typography } from "@mui/material";
import React, { Component } from "react";
import { withStyles } from "@mui/styles";

import { BlogStyles } from "./OurBlog.Style";
import { blogsdata } from "../../utils/models/navbar_interface";

interface blogProps {
	classes?: any;
	item: blogsdata;
}
class OurBlogCard extends Component<blogProps> {
	render() {
		const { classes, item } = this.props;
		return (
			<Box className={classes.blogCard}>
				<Box sx={{ position: "relative" }}>
					<img height="230" width="100%" src={item.image} alt="blog 1" />
					<Box
						sx={{
							width: { sm: "20%", md: "30%", lg: "20%" },
							position: "absolute",
							left: "40%",
							top: "78%",
							py: 1,
							px: 2,
							background: "#272522",
							color: "#E7A356",
							borderRadius: "5px",
							"&:hover": {
								background: "#E7A356",
								color: "#fff",
							},
						}}>
						<Typography className={classes.blogDate}>
							{item.date}
						</Typography>
						<Typography className={classes.blogMonth}>
							{item.month}
						</Typography>
					</Box>
				</Box>
				<Typography className={classes.blogCardTitle}>
					{item.name}
				</Typography>
				<Typography className={classes.blogCardText}>
					{item.description}
				</Typography>
			</Box>
		);
	}
}
export default withStyles(BlogStyles)(OurBlogCard);
