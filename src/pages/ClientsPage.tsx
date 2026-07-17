import ClientCard from "../components/ClientCard";

const ClientsPage = () => {
  return (
    <div className="flex flex-wrap gap-2 m-5">
      <ClientCard
        id={1}
        name=""
        phone=""
        email=""
        created_at=""
      />
    </div>
  );
}

export default ClientsPage;