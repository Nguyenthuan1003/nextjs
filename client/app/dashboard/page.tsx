import React from "react";
import CustomTitleTable from "../../components/CustomTitleTable/CustomTitleTable";
import CustomColumnsTable from "../../components/CustomColumnsTable/CustomColumnsTable";
import Navigation from "../../components/Navigation/Navigation";
import './home.css';

const Home = () => {
  const tableTitle = [
    "Devices",
    "MAC address",
    "IP",
    "Create Date",
    "Power Consumption (Km/h)",
  ];
  let tableTitleList = [];
  tableTitle.forEach((title) => {
    tableTitleList.push(
      <CustomTitleTable title={title} style={"text-gray-500 font-medium border-b-2 border-black px-5 pt-5"} />
    );
  });
  return (
    <div className={"grid bg-gray-100 h-screen grid-columns"}>
      <div className={"text-left bg-white shadow-2xl"}>
        <Navigation />
      </div>
      <div className={""}>
        <div className={"flex justify-end px-3 py-3 bg-white"}>
         <img src="https://facebookninja.vn/wp-content/uploads/2023/06/anh-dai-dien-mac-dinh-zalo.jpg" alt="" className={"w-8 rounded-full mr-3"}/>
          <h3 className={"font-medium text-gray-500"}>Welcome John</h3>
        </div>
        <div className={"p-20"}>
          <table className={"bg-white rounded-lg"}>
            <thead>
              <tr>{tableTitleList}</tr>
            </thead>
            <tbody>
              <tr></tr>
            </tbody>
          </table>
        </div>
        <div>
          <div></div>
          <div>
            <form action=""></form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
