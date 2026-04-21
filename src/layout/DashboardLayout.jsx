import { Outlet } from "react-router-dom";
import Sidebar from "../modules/sidebar/Sidebar";
import Header from "../modules/header/Header";
import styles from "./DashboardLayout.module.css";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboardContainer}>
      <Header />
      <div className={styles.bodyWrapper}>
        <Sidebar />
        <div className={styles.dashboardMain}>
          <main className={styles.contentArea}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
