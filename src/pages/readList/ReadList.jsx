import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReadList = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
        <h1 className="text-5xl text-center bg-gray-200 p-4 font-bold my-15">Books</h1>
      <Tabs>
        <TabList className={'text-xl font-semibold'}>
          <Tab>Read Books</Tab>
          <Tab>Wish List Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
