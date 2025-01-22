import PageContainer from "@/components/common/PageContainer";
import Header from "../components/common/Header";
import { AddTaskFAB } from "@/components/common/AddTaskFAB";

/**
 * Home page, that shows a user's incoming tasks.
 * 
 * @returns Home/incoming tasks page.
 */
export default function Home() {
  return (
    <>
      <Header />
      <PageContainer title="Incoming Tasks">
        <p className="text-center text-xl">
          You have no tasks yet...
        </p>
      </PageContainer>
      <AddTaskFAB />
    </>
  )
}