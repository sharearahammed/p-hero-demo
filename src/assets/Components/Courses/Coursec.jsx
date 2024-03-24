import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Conceptual from "./Conceptual";

const Coursec = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [datas , setDatas] = useState([]);
  useEffect(()=>{
    fetch('course.json')
    .then(res => res.json())
    .then(data => setDatas(data))
  },[])

const level1 = datas.filter(data => data.category === 'Computer Science');
const level2 = datas.filter(data => data.category === 'Mathematics');
const conceptuals = datas.filter(data => data.category === 'Finance');



  return (
    <div>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Level 1 course</Tab>
          <Tab>Level 2 course</Tab>
          <Tab>Conceptual session</Tab>
        </TabList>

        <TabPanel>
        {
            level1.map((levelone,idx) => <Level1 key={idx} levelone={levelone}></Level1>)
        }
        </TabPanel>
        
        <TabPanel>
        {
            level2.map((leveltwo,idx) => <Level2 key={idx} leveltwo={leveltwo}></Level2>)
        }
        </TabPanel>
        
        <TabPanel>
        {
            conceptuals.map((conceptual,idx) => <Conceptual key={idx} conceptual={conceptual}></Conceptual>)
        }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Coursec;
