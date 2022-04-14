/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import { useState, useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Soft UI Dashboard React components
import SuiBox from "~/components/SuiBox";
import SuiTypography from "~/components/SuiTypography";

// Soft UI Dashboard React example components
import DashboardLayout from "~/layouts//LayoutContainers/DashboardLayout";
import Footer from "~/layouts//Footer";
import ProfileInfoCard from "~/layouts//Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "~/layouts//ProfilesList";
import DefaultProjectCard from "~/layouts//Cards/ProjectCards/DefaultProjectCard";
import PlaceholderCard from "~/layouts//Cards/PlaceholderCard";

// Overview page components
import Header from "~/pages/profile/components/Header";
import PlatformSettings from "~/pages/profile/components/PlatformSettings";

// Data

// API
import AuthApi from "~/api/auth";
import { useAuth } from "~/auth-context/auth.context";

function Overview() {
    const { setUser } = useAuth();
    let { user } = useAuth();

    const [error, setError] = useState(undefined);

    useEffect(() => {
        (async () => {
            try {
                let response = await auth.Info();
                if (response.data && response.data.status === false) {
                    return setError(response.data.error);
                }
                return setUser(response.data);
            } catch (err) {
                console.log(err);
                if (err.response) {
                    return setError(err.response.data.error);
                }
                return setError("There has been an error.");
            }
        })();
    }, []);
    console.log(user);
    return (
        <DashboardLayout>
            <Header />
            <SuiBox mt={5} mb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} xl={4}>
                        <PlatformSettings />
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <ProfileInfoCard
                            title="profile information"
                            description=""
                            info={{
                                userName: user.username,
                                fullName: user.name,
                                email: user.email,
                            }}
                            social={[
                                {
                                    link: "https://www.facebook.com/CreativeTim/",
                                    icon: <FacebookIcon />,
                                    color: "facebook",
                                },
                                {
                                    link: "https://twitter.com/creativetim",
                                    icon: <TwitterIcon />,
                                    color: "twitter",
                                },
                                {
                                    link: "https://www.instagram.com/creativetimofficial/",
                                    icon: <InstagramIcon />,
                                    color: "instagram",
                                },
                            ]}
                            action={{ route: "", tooltip: "Edit Profile" }}
                        />
                    </Grid>
                </Grid>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default Overview;
