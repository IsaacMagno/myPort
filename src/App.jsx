import React from "react";
import FullPage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";

import Home from "./components/Home";
import PageOne from "./components/Apresentation/PageOne";
import PageTwo from "./components/Apresentation/PageTwo";
import PageThree from "./components/Apresentation/PageThree";
import PageFour from "./components/Apresentation/PageFour";
import TobiasProject from "./components/Projects/TobiasProject";
import Dronelivery from "./components/Projects/Dronelivery";
import IsaacsBank from "./components/Projects/IsaacsBank";

const App = () => {
  return (
    <FullPage>
      <FullPageSections>
        <FullpageSection>
          <Home />
        </FullpageSection>
        <FullpageSection>
          <PageOne />
        </FullpageSection>
        <FullpageSection>
          <PageTwo />
        </FullpageSection>
        <FullpageSection>
          <PageThree />
        </FullpageSection>
        <FullpageSection>
          <TobiasProject />
        </FullpageSection>
        <FullpageSection>
          <Dronelivery />
        </FullpageSection>
        <FullpageSection>
          <IsaacsBank />
        </FullpageSection>
        <FullpageSection>
          <PageFour />
        </FullpageSection>
      </FullPageSections>
    </FullPage>
  );
};

export default App;
