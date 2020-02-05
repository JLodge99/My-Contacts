import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
});

class NavigationBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ""
		};
	}

	render() {
		const { _logout } = this.props;
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title} />
						<Button color="inherit" onClick={_logout}>
							Logout
						</Button>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(NavigationBar);