import Image from "next/image";
import styles from "../styles/Home.module.css";
import Review from "@/components/Reviews/Reviews";
import SuccessStory from "@/components/SuccessStory/SuccessStory";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import AssignmentType from "@/components/AssignmentType/AssignmentType";
import Landing from "@/components/Landing/Landing";
import WorkProgress from "@/components/WorkProgress/WorkProgress";
import GlobalPresence from "@/components/GlobalPresence/GlobalPresence";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <main className={styles.main}>
          <Landing />
          <WorkProgress />
          <AssignmentType />
          <SuccessStory />
          <WhyChooseUs />
          <GlobalPresence />
          <Review />
        </main>
      </Layout>
    </>
  );
}
