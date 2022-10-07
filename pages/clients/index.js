import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "huy", name: "Huy" },
    { id: "hai", name: "Hai" },
  ];
  return (
    <div>
      <h1>The ClientsPage Page</h1>{" "}
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
