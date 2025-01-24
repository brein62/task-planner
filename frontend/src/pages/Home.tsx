import PageContainer from "@/components/common/PageContainer";
import { AddTaskFAB } from "@/components/common/AddTaskFAB";
import { Layout } from "@/components/common/Layout";
import DisplayCard from "@/components/task/DisplayCard";

/**
 * Home page, that shows a user's incoming tasks.
 *
 * @returns Home/incoming tasks page.
 */
export default function Home() {
  return (
    <Layout>
      <PageContainer title="Incoming Tasks">
        <p className="text-center text-xl">You have no tasks yet...</p>
        <DisplayCard />
      </PageContainer>
      <AddTaskFAB />
    </Layout>
  );
}
