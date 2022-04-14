/**
=========================================================
* Soft UI Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import { useState, useEffect } from "react";
// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "~/components/SuiBox";
import SuiTypography from "~/components/SuiTypography";
import SuiAvatar from "~/components/SuiAvatar";
import SuiBadge from "~/components/SuiBadge";

// Images
import team2 from "~/assets/images/team-2.jpg";
// Soft UI Dashboard React example components
import DashboardLayout from "~/layouts/LayoutContainers/DashboardLayout";
import DashboardNavbar from "~/layouts/Navbars/DashboardNavbar";
import Footer from "~/layouts/Footer";
import Tables from "~/layouts/Table";

// Custom styles for the Tables
import styles from "~/pages/tables/styles";

//props
import PropTypes from "prop-types";

UserTable.propTypes = {
    DataUsers: PropTypes.array,
};

UserTable.defaultProps = {
    DataUsers: [],
};
function UserTable(props) {
    const classes = styles();
    const { DataUsers } = props;
    const rowKey = DataUsers.map(() => {});
    const formatDate = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    const { columns, rows } = {
        columns: [
            { name: "Author", align: "left" },
            { name: "Email", align: "left" },
            { name: "Status", align: "center" },
            { name: "Employed", align: "center" },
            { name: "Action", align: "center" },
        ],
        rows: [
            DataUsers.map((user) => ({
                Author: (
                    <Author
                        image={team2}
                        username={user.username}
                        fullname={user.name}
                        email={user.email}
                    />
                ),
                Email: <Detail email={user.email} />,
                Status: (
                    <SuiBadge
                        variant="gradient"
                        badgeContent="online"
                        color="success"
                        size="extra-small"
                    />
                ),
                Employed: (
                    <SuiTypography
                        variant="caption"
                        textColor="secondary"
                        fontWeight="medium"
                    >
                        {formatDate(user.created_at)}
                    </SuiTypography>
                ),
                Action: (
                    <SuiTypography
                        component="a"
                        href="#"
                        variant="caption"
                        textColor="secondary"
                        fontWeight="medium"
                    >
                        Edit
                    </SuiTypography>
                ),
            })),
        ],
    };
    console.log();
    function Author({ image, username, fullname }) {
        return (
            <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
                <SuiBox mr={2}>
                    <SuiAvatar
                        src={image}
                        alt={fullname}
                        size="sm"
                        variant="rounded"
                    />
                </SuiBox>
                <SuiBox display="flex" flexDirection="column">
                    <SuiTypography variant="button" fontWeight="medium">
                        {username}
                    </SuiTypography>
                    <SuiTypography variant="caption" textColor="secondary">
                        {fullname}
                    </SuiTypography>
                </SuiBox>
            </SuiBox>
        );
    }
    function Detail({ email }) {
        return (
            <SuiBox display="flex" flexDirection="column">
                <SuiTypography
                    variant="caption"
                    fontWeight="medium"
                    textColor="text"
                >
                    {email}
                </SuiTypography>
            </SuiBox>
        );
    }
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SuiBox py={3}>
                <SuiBox mb={3}>
                    <Card>
                        <SuiBox
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={3}
                        >
                            <SuiTypography variant="h6">
                                Authors table
                            </SuiTypography>
                        </SuiBox>
                        <SuiBox customClass={classes.tables_table}>
                            <Tables columns={columns} rows={rows[0]} />
                        </SuiBox>
                    </Card>
                </SuiBox>
            </SuiBox>
            <Footer />
        </DashboardLayout>
    );
}

export default UserTable;
