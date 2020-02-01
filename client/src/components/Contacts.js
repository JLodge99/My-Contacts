import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Create from "./Create";
import Search from "./Search";
import ContactsList from "./ContactsList";
import AppBar from "./AppBar";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = theme => ({
	paper: {
		margin: theme.spacing(3, 0)
	}
});

class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
			loggedIn: false
		};
		this._logout = this._logout.bind(this);
	}

	_logout(event) {
		event.preventDefault();
		console.log("logging out");
		axios.post("/auth/logout").then(response => {
			console.log(response.data);
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				});
				window.location.href = "/login";
			}
		});
	}

	componentDidMount() {
		axios.get("/auth/user").then(response => {
			console.log(response.data);
			if (!!response.data.user) {
				console.log("THERE IS A USER");
				this.setState({
					loggedIn: true,
					user: response.data.user
				});
			} else {
				this.setState({
					loggedIn: false,
					user: null
				});
				window.location.href = "/login";
			}
		});
	}

	render() {
		const { user } = this.state;
		const { classes } = this.props;
		console.log(user === null);
		if (user) {
			return (
				<div>
					<AppBar _logout={this._logout} />
					<Container
						component="main"
						className={classes.paper}
						justify="center"
						maxWidth="xl"
					>
						<Grid
							container
							className={classes.paper}
							direction="row"
							justify="center"
							alignItems="center"
							spacing={2}
						>
							<Grid xs={6} item>
								<Search />
							</Grid>
							<Grid item>
								<Create />
							</Grid>
						</Grid>
						<Grid item>
							<ContactsList />
						</Grid>
					</Container>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default withStyles(styles, { withTheme: true })(Contacts);
