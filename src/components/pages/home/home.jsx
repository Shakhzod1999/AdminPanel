import React from "react";
import Chart from "../../charts/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import { userData } from "../../../dummyData";
import "./home.css";
import WidgetLg from "../../widgetLg/WidgetLg";
import WidgetSm from "../../widgetSm/WidgetSm";

export default function home() {
    return (
        <div className="homePage">
            <FeaturedInfo />
            <Chart
                data={userData}
                title="User Analytics"
                grid
                dataKey="Active User"
            />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
}
