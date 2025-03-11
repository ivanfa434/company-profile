import Image from "next/image";
import { GetTeams } from "../api/GetTeams";
import { User } from "../types/userTypes";

export default async function Teams() {
  const users: User[] | null = await GetTeams(); // Ambil array user

  if (!users) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 text-center text-red-500">
        <h1 className="text-3xl md:text-5xl font-bold">Meet Our Team</h1>
        <p>Failed to load team members.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-400 text-center mb-8">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{`${user.name.first} ${user.name.last}`}</h2>
            <p className="text-gray-600">Software Engineer</p>
            <p className="text-gray-500 mt-2">{user.email}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
