import React from "react";
import './Sidebar.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FeedIcon from '@mui/icons-material/Feed';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

export default function Sidebar() {
    return (

        <div className="sidebar">

            <TwitterIcon className="sidebar_twitterIcon" />

            <SidebarOption active text="Home" Icon={HomeIcon} />
            <SidebarOption text="Search" Icon={SearchIcon} />
            <SidebarOption text="Notifications" Icon={NotificationsIcon} />
            <SidebarOption text="Messages" Icon={MailIcon} />
            <SidebarOption text="Bookmarks" Icon={BookmarkIcon} />
            <SidebarOption text="List" Icon={FeedIcon} />
            <SidebarOption text="Profile" Icon={AccountBoxIcon} />
            <SidebarOption text="More" Icon={MoreHorizIcon} />
            <Button variant="outlined" className="sidebar_tweet" fullWidth>Tweet</Button>

        </div>
    );
}