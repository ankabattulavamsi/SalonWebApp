/** @format */

import React, { Component } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { withStyles } from "@mui/styles";

import { BlogStyles } from "./OurBlog.Style";
import { blogsData } from "../../utils/data/blogs/blogs_data";
import OurBlogCard from "./OurBlogCard";

interface blogProps {
	classes: any;
}
class OurBlogs extends Component<blogProps> {
	render() {
		const { classes } = this.props;

		return (
			<>
				<Box sx={{ pb: 10, pt: 10 }}>
					<Box sx={{ mb: 4 }}>
						<Typography className={classes.blogHeading}>
							Our Blogs
						</Typography>
						<Typography className={classes.blogTitleLine}></Typography>
					</Box>
					<Grid
						container
						justifyContent="center"
						columnSpacing={4}
						rowSpacing={3}
						sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}>
						{blogsData.map((item, index: number) => {
							return (
								<React.Fragment key={index}>
									<Grid item lg={3} md={3} xs={12} sm={6}>
										<OurBlogCard item={item} />
									</Grid>
								</React.Fragment>
							);
						})}
					</Grid>
				</Box>
			</>
		);
	}
}

export default withStyles(BlogStyles)(OurBlogs);
