import NoticeCard from "../noticespage/NoticeCard";

function NoticeSection() {
  return (
    <div>
      <h1>Notices</h1>
      <NoticeCard />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
    </div>
  );
}

export default NoticeSection;
