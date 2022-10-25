/** @format */
import React, { Component } from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Styles } from "../OurSpecialists/specialist.styles";
import { withStyles } from "@mui/styles";
import "react-multi-carousel/lib/styles.css";
import { CommonViewAllButton } from "../common";
import withRouter from "../../hoc/withRouter";
import { categoryData } from "../../utils/data/customer/CustomerData";
import CategoryCard from "../customer/CategoryCard";

interface IProps {
	navigate: any;
}
class CustomerServeCat extends Component<IProps> {
	onClickNavigateOffersPage = () => {
		this.props.navigate("/customer");
	};
	render() {
		const { classes }: any = this.props;

		return (
			<>
				<Grid container sx={{ mt: 10 }} maxWidth='lg'>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Stack className={classes.specialist}>
							<Box className={classes.specialistHeading}>
								<Stack sx={{ mb: { sm: 2, xs: 2 } }}>
									<Typography className={classes.blogHeading}>
										Category
									</Typography>
									<Typography
										className={classes.blogTitleLine}></Typography>
								</Stack>
							</Box>
							<Grid className="card-item" gap={2} container>
								{categoryData.map((data, index: number) => (
									<Grid
										key={index}
										className="innerCard"
										sm={6}
										md={4}
										lg={4}
										xs={12}
										item>
										<CategoryCard data={data} />
									</Grid>
								))}
							</Grid>
						</Stack>
					</Grid>
				</Grid>
			</>
		);
	}
}
export default withStyles(Styles)(withRouter(CustomerServeCat));
