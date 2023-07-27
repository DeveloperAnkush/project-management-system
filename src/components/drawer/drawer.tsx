import React, { useState } from "react";
import PropTypes from "prop-types";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import { Box, CssBaseline, Divider, IconButton, List, ListItem, ListItemText, Menu, Toolbar, Typography, Badge, Collapse, ListItemIcon, MenuItem, Tooltip } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle, ExpandLess, ExpandMore } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ReactComponent as BigLogo } from "../../assets/sidebar-assets/logo.svg";
import Smalllogo from "../../assets/Smalllogo.png";
import MoreIcon from "@mui/icons-material/MoreVert";
// import LogOutModal from "./LogOutModal";
import MobileDrawer from "./mobileDrawer";
import { useNavigate } from "react-router-dom";
// All SVGS
import { AllEmployees, Assesment, AssestManagement, AssestPurchase, Candidate, CandidateList, CandidateOnboarding, ClientFeedback, ClientFeedbackList1, Dashboard, DesignationCategories, DesignationHistory, DeveloperAdditionalHours, DeveloperLeaves, EmailPermission, EmployeeAdditionalHours, EmployeeProbation, Feedback, FeedbackCategories, GiveFeedback, HRMS, HelpDesk, Incentives, InterviewQuestion, InterviewSchedule, Jobs, Logout, Notifications, Payments, Project, QuestionCategories, QuestionList, RefreshmentCategories, Refreshments, Requests, Rewards, Role, SalarySlip, SalesTarget, SystemSetting, TeamActivitiesList, Technology, Testimonial, Ticket, UserDetails, ViewFeedback } from "../../assets/sidebar-assets";
// Types
import { DrawerData, DrawerItem } from "../../utlis/types";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useGetTotalNotificationsQuery } from "../../redux/services/notification.service";
import Loader from "../loader/loader";
import LogOut from "../../pages/auth/logout";

const drawerWidth = 250;
const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(9.5)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(10.5)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: "0px",
        width: `100%`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const ResponsiveDrawer = (props: any) => {
    const userData = useSelector((state: RootState) => state.auth.userData?.data);
    console.log('userData: ', userData);
    // Get the total count of notifications
    const { data: totalNotifications, isLoading } = useGetTotalNotificationsQuery();

    const json: DrawerData = {
        list: [
            {
                id: 1,
                name: "Dashboard",
                img: <Dashboard />,
                path: "/dashboard",
            },
            {
                id: 2,
                name: "Rewards",
                img: <Rewards />,
                path: "/dashboard",
            },
            {
                id: 3,
                name: "Technology",
                img: <Technology />,
                path: "/technology",
            },
            {
                id: 4,
                name: "Salary Slip",
                img: <SalarySlip />,
                subitems: [
                    {
                        id: 1,
                        name: "Salary Slip",
                        img: <SalarySlip />,
                        path: "/salary-slip",
                    },
                    {
                        id: 2,
                        name: "User Details",
                        img: <UserDetails />,
                        path: "/user_details",
                    },
                ],
            },
            {
                id: 5,
                name: "Sales Target",
                img: <SalesTarget />,
                path: "/sales-target",
            },
            {
                id: 6,
                name: "Project",
                img: <Project />,
                subitems: [
                    {
                        id: 1,
                        name: "Project",
                        img: <Project />,
                        path: "/project-list",
                    },
                    {
                        id: 2,
                        name: "Developer Leaves",
                        img: <DeveloperLeaves />,
                        path: "/developer-leave",
                    },
                    {
                        id: 3,
                        name: "Developer Additional Hours",
                        img: <DeveloperAdditionalHours />,
                        path: "/developer-additional-hours",
                    },
                    {
                        id: 4,
                        name: "PC Selling Incentives",
                        img: <Incentives />,
                        path: "/incentive",
                    },
                    {
                        id: 5,
                        name: "Payments",
                        img: <Payments />,
                        path: "/payment",
                    },
                    {
                        id: 6,
                        name: "Escalation Ticket",
                        img: <Ticket />,
                        path: "/ticket",
                    },
                ],
            },
            {
                id: 7,
                name: "Testimonial",
                img: <Testimonial />,
                path: "/testimonial",
            },
            {
                id: 8,
                name: "All Employees",
                img: <AllEmployees />,
                subitems: [
                    {
                        id: 1,
                        name: "All Employees",
                        img: <AllEmployees />,
                        path: "/all-employee",
                    },
                    {
                        id: 2,
                        name: "Employee probation",
                        img: <EmployeeProbation />,
                        path: "/employee-probation",
                    },
                ],
            },
            {
                id: 9,
                name: "Assessment",
                img: <Assesment />,
                subitems: [
                    {
                        id: 1,
                        name: "Give Feedback",
                        img: <GiveFeedback />,
                        path: "/give-feedback",
                    },
                    {
                        id: 2,
                        name: "View Feedback",
                        img: <ViewFeedback />,
                        path: "/view-feedback",
                    },
                ],
            },
            {
                id: 10,
                name: "Assets Management",
                img: <AssestManagement />,
                subitems: [
                    {
                        id: 1,
                        name: "Requests",
                        img: <Requests />,
                        path: "/asset-request",
                    },
                    {
                        id: 2,
                        name: "Asset Purchase",
                        img: <AssestPurchase />,
                        path: "/asset-purchase",
                    },
                ],
            },
            {
                id: 11,
                name: "Client Feedback",
                img: <ClientFeedback />,
                subitems: [
                    {
                        id: 1,
                        name: "Question Categories",
                        img: <QuestionCategories />,
                        path: "/question-categories",
                    },
                    {
                        id: 2,
                        name: "Question List",
                        img: <QuestionList />,
                        path: "/questions-list",
                    },
                    {
                        id: 3,
                        name: "Client Feedback List",
                        img: <ClientFeedbackList1 />,
                        path: "/client-feedback-list",
                    },
                ],
            },
            {
                id: 12,
                name: "Refreshments",
                img: <Refreshments />,
                path: "/refreshment",
            },
            {
                id: 13,
                name: "HRMS",
                img: <HRMS />,
                subitems: [
                    {
                        id: 1,
                        name: "Recruitment",
                        img: <HRMS />,
                        subitems: [
                            {
                                id: 1,
                                name: "Candidate",
                                img: <Candidate />,
                                path: "/candidate-add",
                            },
                            {
                                id: 2,
                                name: "Candidate List",
                                img: <CandidateList />,
                                path: "/candidate-list",
                            },
                            {
                                id: 3,
                                name: "Interview Questions",
                                img: <InterviewQuestion />,
                                path: "/interview-questions",
                            },
                            {
                                id: 4,
                                name: "Jobs",
                                img: <Jobs />,
                                path: "/interview-jobs",
                            },
                            {
                                id: 5,
                                name: "Interview Schedules",
                                img: <InterviewSchedule />,
                                path: "/interview-schedules",
                            },
                            {
                                id: 6,
                                name: "Feedbacks",
                                img: <Feedback />,
                                path: "/interview-feedbacks",
                            },
                            {
                                id: 7,
                                name: "Candidate Onboarding",
                                img: <CandidateOnboarding />,
                                path: "/candidate-onboard",
                            },
                        ],
                    },
                    {
                        id: 2,
                        name: "Employee Additional Hours",
                        img: <EmployeeAdditionalHours />,
                        path: "/employee-hours",
                    },
                ],
            },
            {
                id: 14,
                name: "Help Desk",
                img: <HelpDesk />,
                path: "/help-desk",
            },
            {
                id: 15,
                name: "Notifications",
                img: <Notifications />,
                path: "/notifications",
            },
            {
                id: 16,
                name: "System Settings",
                img: <SystemSetting />,
                subitems: [
                    {
                        id: 1,
                        name: "Role",
                        img: <Role />,
                        path: "/roles",
                    },
                    {
                        id: 2,
                        name: "Email Permission",
                        img: <EmailPermission />,
                        path: "/email-permission",
                    },
                    {
                        id: 3,
                        name: "Team Activities List",
                        img: <TeamActivitiesList />,
                        path: "/team-activities-list",
                    },
                    {
                        id: 4,
                        name: "Refreshment Categories",
                        img: <RefreshmentCategories />,
                        path: "/refreshment-categories",
                    },
                    {
                        id: 5,
                        name: "Designation Categories",
                        img: <DesignationCategories />,
                        path: "/designation-categories",
                    },
                    {
                        id: 6,
                        name: "Designation History",
                        img: <DesignationHistory />,
                        path: "/designation-history",
                    },
                    {
                        id: 7,
                        name: "Feedback Categories",
                        img: <FeedbackCategories />,
                        path: "/feedback-categories",
                    },
                ],
            },
            {
                id: 17,
                name: "Logout",
                img: <Logout />,
                path: "/logout",
            },
        ],
    };

    let navigate = useNavigate();
    let path = window.location.pathname;
    const { window: windows, children } = props;
    const [open, setOpen] = useState<boolean>(true);

    const handleDrawerClose = (): void => {
        setOpen(!open);
    };

    const container =
        windows !== undefined ? () => windows().document.body : undefined;

    const [state, setState] = useState<{ [key: string]: boolean }>({});
    const [stateChild, setStateChild] = useState<{ [key: string]: boolean }>({});

    const handleClick = (e: string): void => {
        setState({ [e]: !state[e] });
    };
    const handleClickChild = (e: string): void => {
        setStateChild({ [e]: !stateChild[e] });
    };

    // const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: any) => {
        // setAnchorEl(event.currentTarget);
        navigate("/user-profile");
    };

    const handleMobileMenuClose = (): void => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event: any): void => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = "primary-search-account-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={totalNotifications} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Typography
                    textTransform="capitalize"
                    fontSize="20px"
                    fontWeight="700px"
                >
                    {userData?.name}
                </Typography>
            </MenuItem>
        </Menu>
    );

    const renderSubitems = (subitems: DrawerItem[]): JSX.Element[] => {
        return subitems.map((subitem) => {
            const { id, name, img, path, subitems: nestedSubitems } = subitem;
            const hasNestedSubitems = nestedSubitems && nestedSubitems.length > 0;

            return (
                <React.Fragment key={id}>
                    <ListItem onClick={() => hasNestedSubitems && handleClickChild(name)}>
                        <Tooltip title={name} arrow placement="right">
                            <ListItemIcons>{img}</ListItemIcons>
                        </Tooltip>
                        <ListItemTexts primary={name} onClick={() => handlePath(path)}
                            sx={{
                                opacity: stateChild[name] || open ? 1 : 0,
                                display: !open ? 'none' : 'block',
                            }}
                        />
                        {hasNestedSubitems ? (stateChild[name] ? <ExpandLess /> : <ExpandMore />) : null}
                        <Divider key={id} absolute />
                    </ListItem>
                    {hasNestedSubitems && (
                        <Collapse in={stateChild[name]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderSubitems(nestedSubitems)}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            );
        });
    };
    const drawer = (
        <div style={{ cursor: "pointer" }}>
            <DrawerHeader />
            {json.list.map((list) => (
                <React.Fragment key={list.id}>
                    <ListItem onClick={() => list.subitems && handleClick(list.name)}>
                        <Tooltip title={list.name} arrow placement="right">
                            <ListItemIcons>{list.img}</ListItemIcons>
                        </Tooltip>
                        <ListItemTexts primary={list.name} onClick={() => handlePath(list.path)}
                            sx={{
                                opacity: state[list.name] || open ? 1 : 0,
                                display: !open ? 'none' : 'block',
                            }}
                        />
                        {list.subitems ? (state[list.name] ? <ExpandLess /> : <ExpandMore />) : null}
                        <Divider key={list.id} absolute />
                    </ListItem>
                    {list.subitems && (
                        <Collapse in={state[list.name]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderSubitems(list.subitems)}
                            </List>
                        </Collapse>
                    )}
                </React.Fragment>
            ))}
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
        </div>
    );

    const [openModal, setOpenModal] = React.useState<boolean>(false);
    console.log('openModal: ', openModal);

    const handlePath = (route: string | undefined) => {
        console.log('route: ', route);
        if (route === "/logout") {
            setOpenModal(true);
        } else {
            navigate(route ?? '/dashboard');
        }
    };

    if (isLoading) { return (<Loader />) }

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    open={open}
                    sx={{
                        backgroundColor: "white",
                        color: "black",
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                    }}
                >
                    <Toolbar
                        sx={{
                            padding: { md: "0px 0px", sm: "16px 16px" },
                        }}
                    >
                        {open ? (
                            <Box
                                sx={{
                                    background: "black",
                                    display: { xs: "none", sm: "flex" },
                                    width: "250px",
                                    padding: "10px 10px 0px 10px",
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/dashboard")}
                            >
                                <BigLogo />
                                <img src={Smalllogo} alt="logo" />
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    background: "black",
                                    display: { xs: "none", sm: "flex" },
                                    width: "85px",
                                    padding: "10px 1px",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                }}
                                onClick={() => navigate("/dashboard")}
                            >
                                <img src={Smalllogo} alt="logo" />
                            </Box>
                        )}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerClose}
                            sx={{ mr: 2, display: { sm: "none" } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                textTransform: "capitalize",
                                fontSize: "1.5rem",
                                marginLeft: { md: "22px", sm: "0px" },
                            }}
                        >
                            {path === "/candidate-add"
                                ? "Candidate"
                                : path.split("/")[1].replaceAll("-", " ").replace("_", " ")}
                        </Typography>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: "none", md: "flex" }, mr: "10px" }}>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                onClick={() => navigate("/notifications")}
                            >
                                <Badge badgeContent={totalNotifications} color="error">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box
                            sx={{
                                backgroundColor: "lightblue",
                                display: { xs: "none", md: "flex", gap: "5px" },
                                alignItems: "center",
                                padding: "10px",
                                cursor: "pointer",
                            }}
                        >
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Typography
                                textTransform="capitalize"
                                fontSize="20px"
                                fontWeight="700px"
                            >
                                {userData?.name}
                            </Typography>
                        </Box>
                        <Box sx={{ display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                <Box component="nav" aria-label="mailbox folders">
                    <MobileDrawer
                        open={open}
                        onClose={handleDrawerClose}
                        drawer={drawer}
                        container={container}
                    />
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: "none", sm: "block" },
                        }}
                        open={open}
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        width: { xs: `calc(100% - ${drawerWidth}px)` },
                        marginTop: "60px",
                    }}
                >
                    {children}
                </Box>
                {openModal && (
                    <LogOut
                        open={openModal}
                        closeModal={() => {
                            setOpenModal(false);
                        }}
                    />
                )}
            </Box>
        </>
    );
};

ResponsiveDrawer.propTypes = {
    windows: PropTypes.func,
};

export default ResponsiveDrawer;

const ListItemIcons = styled(ListItemIcon)`
  min-width: 30px;
  svg {
    fill: #000;
  }
`;

const ListItemTexts = styled(ListItemText)`
  .MuiListItemText-primary {
    font-size: 15px;
  }
`;