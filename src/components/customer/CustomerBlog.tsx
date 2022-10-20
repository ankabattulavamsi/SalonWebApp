/** @format */
import React, { Component } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Styles } from "../OurSpecialists/specialist.styles";
import { withStyles } from "@mui/styles";
import "react-multi-carousel/lib/styles.css";
import withRouter from "../../hoc/withRouter";
import { blogsData } from "../../utils/data/blogs/blogs_data";
import OurBlogCard from "../OurBlogs/OurBlogCard";

interface IProps {
	navigate: any;
}
class CustomerBlog extends Component<IProps> {
	onClickNavigateOffersPage = () => {
		this.props.navigate("/customer");
	};
	render() {
		const { classes }: any = this.props;

		return (
			<>
				<Grid
					container
					// sx={{ mt: 10 }}
					style={{
						background: "#FDF6EE",
						margin: "0px",
						marginTop: "40px",
						padding: "60px 0",
						marginBottom: "-80px",
					}}>
					<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
					<Grid item xs={10} sm={10} md={10} lg={10}>
						<Stack className={classes.specialist}>
							<Box
								sx={{ marginBottom: "40px" }}
								className={classes.specialistHeading}>
								<Stack sx={{ mb: { sm: 2, xs: 2 } }}>
									<Typography className={classes.blogHeading}>
										Our Blogs
									</Typography>
									<Typography
										className={classes.blogTitleLine}></Typography>
								</Stack>
							</Box>
							<Grid
								container
								justifyContent="center"
								columnSpacing={4}
								rowSpacing={3}
								sx={{ px: { sm: 4, xs: 2, md: 0, lg: 0 } }}>
								{blogsData.map((data, index: number) => (
									<React.Fragment key={index}>
										<Grid item lg={4} md={3} xs={12} sm={6}>
											<OurBlogCard item={data} />
										</Grid>
									</React.Fragment>
								))}
							</Grid>
						</Stack>
					</Grid>
					<Grid item xs={1} sm={1} md={1} lg={1}></Grid>
				</Grid>
			</>
		);
	}
}
export default withStyles(Styles)(withRouter(CustomerBlog));
