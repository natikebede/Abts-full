
import AddBoxIcon from '@mui/icons-material/AddBox';
import DvrIcon from '@mui/icons-material/Dvr';
import CommuteIcon from '@mui/icons-material/Commute';
import AssessmentIcon from '@mui/icons-material/Assessment';

const NavItem=[
    {
    path:"/dashbord",
    name:"Dashbord",
    icon:<AssessmentIcon />
    },
    {
        path:"/Makereservation",
        name:"Make reservation",
        icon:<AddBoxIcon />
        },
        {
            path:"/viewreservation",
            name:" view reservation",
            icon:<DvrIcon />
            },
            {
                path:"/Viewtrips",
                name:"View trips",
                icon:<CommuteIcon />
                },
    ];
    export default NavItem;