import ServiceCard from "../components/ServiceCard"

const DashboardPage = () => {
  return (
    <div className="flex flex-wrap gap-2 m-5">
      <ServiceCard
        id={1}
        client_id={1}
        device=""
        issue=""
        status
        created_at=""
      />
    </div>
  );
}

export default DashboardPage;