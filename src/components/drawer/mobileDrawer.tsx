import { Drawer } from "@mui/material";

const MobileDrawer = (props: any) => {
    return (
        <Drawer
            variant="temporary"
            container={props.container}
            open={props.open}
            onClose={props.onClose}
            ModalProps={{
                keepMounted: true,
            }}
            sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": { boxSizing: "border-box", width: props.drawerWidth },
            }}
        >
            {props.drawer}
        </Drawer>
    );
};

export default MobileDrawer;
