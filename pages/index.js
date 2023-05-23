import AssignmentForm from "@/components/AssignmentForm";
import IntroPanel from "@/components/IntroPanel";
import { Grid } from "@mui/material";
import Head from "next/head";
import Layout from "@/components/Layout";
import SuccessPanel from "@/components/SuccessPanel";

export default function Home() {
  return (
    <Layout>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
      />
      <Head></Head>
      <div style={{ minHeight: "90vh" }}>
        <Grid container sx={{ padding: "0 1em 0 1em" }}>
          <Grid item xs={12} md={6} id="home_left_panel">
            <IntroPanel />
          </Grid>
          <Grid item xs={12} md={6} className="home_right_panel">
            {/* <SuccessPanel /> */}
            <AssignmentForm />
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
