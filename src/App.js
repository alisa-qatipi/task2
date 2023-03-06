import "./App.css";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Components/Card";
import domains from "./Components/Content/Domains";
import webHosting from "./Components/Content/WebHosting";
import dedicatedServers from "./Components/Content/DedicatedServers";
import virtualCloudServers from "./Components/Content/VirtualCloudServers";
import wordpressHosting from "./Components/Content/WordPressHosting";
import emailhosting from "./Components/Content/EmailHosting";
import vpsHostingServers from "./Components/Content/VPSHostingServers";
import freeHosting from "./Components/Content/FreeHosting";
function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showOption1, setShowOption1] = useState(false);
  const [showOption2, setShowOption2] = useState(false);
  const [showOption3, setShowOption3] = useState(false);
  const [showOption4, setShowOption4] = useState(false);

  const handleTitleClick = () => {
    setShowParagraph(!showParagraph);
  };

  const handleTitleClick2 = () => {
    setShowOptions(!showOptions);
  };

  const handleOption = (option) => {
    switch (option) {
      case 1:
        setShowOption1(!showOption1);
        break;
      case 2:
        setShowOption2(!showOption2);
        break;
      case 3:
        setShowOption3(!showOption3);
        break;
      case 4:
        setShowOption4(!showOption4);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
        <TabList>
          <Tab>Domains</Tab>
          <Tab>Web Hosting</Tab>
          <Tab>Dedicated Servers</Tab>
          <Tab>Virtual Cloud Servers</Tab>
          <Tab>WordPress Hosting</Tab>
          <Tab>Email Hosting</Tab>
          <Tab>VPS Hosting Servers</Tab>
          <Tab>Free Hosting</Tab>
        </TabList>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {domains.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {webHosting.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {dedicatedServers.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {virtualCloudServers.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {wordpressHosting.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {emailhosting.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {vpsHostingServers.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="container-fluid mt-3 mb-3">
            <div className="container">
              <div className="d-flex flex-wrap gap-5 align-items-center">
                {freeHosting.map((el) => (
                  <Card title={el.title} price={el.price} />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>

{/* one question with toggle */}
      <div className="container-fluid mb-4 border col-10">
        <div className="container text-start">
          <div
            onClick={handleTitleClick}
            className="question d-flex justify-content-between pt-2"
          >
            <h4>Why park a domain name in Parkname?</h4>
            <p >
              {showParagraph ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </p>
          </div>
          {showParagraph && (
            <p>
              Parkname is the leading industry standard for domain name parking
              and monetization services. We offer a wide variety of services to
              help you achieve success.{" "}
            </p>
          )}
        </div>
      </div>

{/* multiple questions */}
      <div className="container-fluid mb-4 border col-10">
        <div className="container text-start">
          <div
            onClick={handleTitleClick2}
            className="question d-flex justify-content-between border-bottom mb-2"
          >
            <div className="left-side d-flex gap-3">
              <div className="icon mt-3">
                <i class="fa-solid fa-user border rounded-circle p-3 text-primary border-primary"></i>
              </div>
              <div className="contenti mt-2">
                <h3>About Us</h3>
                <p className="text-mute">4 articles in this Topic</p>
              </div>
            </div>
            <p className="mt-4">
              {showOptions ? (
                <i class="fa-solid fa-chevron-up"></i>
              ) : (
                <i class="fa-solid fa-chevron-down"></i>
              )}
            </p>
          </div>
          {showOptions && (
            <div>
              {/* question 1 */}
              <div className="container text-start">
                <div
                  onClick={()=>handleOption(1)}
                  className="question d-flex justify-content-between border-bottom mb-2"
                >
                  <p>How does Parkname seperate itself from other domain name parking companies?</p>
                  <p className="pt-1">
                    {showOption1 ? (
                      <i class="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i class="fa-solid fa-chevron-down"></i>
                    )}
                  </p>
                </div>
                {showOption1 && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam sapiente ab, nobis incidunt minus nesciunt corporis. Possimus, in impedit. Impedit mollitia nam iste? Dolorem consequuntur quos in alias iste tempore.
                  </p>
                )}
              </div>
              {/* question 2 */}
              <div className="container text-start">
                <div
                  onClick={()=>handleOption(2)}
                  className="question d-flex justify-content-between border-bottom mb-2"
                >
                  <p>Is Parkname Parking actually free?</p>
                  <p className="pt-1">
                    {showOption2 ? (
                      <i class="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i class="fa-solid fa-chevron-down"></i>
                    )}
                  </p>
                </div>
                {showOption2 && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus, qui odit illum ut a tenetur vel doloremque at, non quasi porro magnam beatae laborum neque quo temporibus deleniti sunt!
                  </p>
                )}
              </div>
              {/* question 3 */}
              <div className="container text-start border-bottom mb-2">
                <div
                  onClick={()=>handleOption(3)}
                  className="question d-flex justify-content-between"
                >
                  <p>What you do?</p>
                  <p className="pt-1">
                    {showOption3 ? (
                      <i class="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i class="fa-solid fa-chevron-down"></i>
                    )}
                  </p>
                </div>
                {showOption3 && (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod, quibusdam, inventore aliquid deserunt nostrum praesentium, ipsa fugiat quisquam quam molestiae expedita minima possimus cumque aperiam! Tempora quo repudiandae blanditiis?
                  </p>
                )}
              </div>
              {/* question 4 */}
              <div className="container text-start">
                <div
                  onClick={()=>handleOption(4)}
                  className="question d-flex justify-content-between"
                >
                  <p>When was Parkname first founded?</p>
                  <p className="pt-1">
                    {showOption4 ? (
                      <i class="fa-solid fa-chevron-up"></i>
                    ) : (
                      <i class="fa-solid fa-chevron-down"></i>
                    )}
                  </p>
                </div>
                {showOption4 && (
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, modi illum libero sit explicabo reiciendis corporis mollitia ullam, eum itaque iste! Delectus hic quam expedita architecto dolor est officia eveniet?
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
