import { Box } from "@mui/system";
import Header from "../Header";
import Footer from "../Footer"
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';


const HomePage = () => {

  return (
    <Box>
            <Header/>
            <HorizontalRuleIcon style={{position:"absolute", width:"100%", backgroundColor:"#065D7B", padding:"10px", transform:"scale(1, 0.05)"}}/>
            <Footer/>
    </Box>
  );
};

export default HomePage;
