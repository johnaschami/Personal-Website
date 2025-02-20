import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import CustomCursor from "../components/Cursor/CustomCursor"; // Import the new cursor


const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CustomCursor /> {/* Add the new custom cursor */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;

