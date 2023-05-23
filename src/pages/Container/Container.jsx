import { Banner } from "../../components/Banner/Banner";
import { FollowUs } from "../../components/FollowUs/FollowUs";
import { SectionInfomation } from "../../components/SectionInfomation/SectionInfomation";
import { Slider } from "../../components/Slider/Slider";
import { TopCategories } from "../../components/TopCategories/TopCategories";
import { TopTrending } from "../../components/TopTrending/TopTrending";
import "./index.css";

export const Container = () => {
  return (
    <div className="container">
      <Slider />
      <TopCategories />
      <TopTrending />
      <Banner />
      <SectionInfomation />
      <FollowUs />
    </div>
  );
};
