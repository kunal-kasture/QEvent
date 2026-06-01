"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    price: "",
    imageUrl: "",
  });
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Simulated Event Creation:", formData);

    router.push("/events");
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/events");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="text-center mt-20 text-xl font-semibold text-slate-600">
        Verifying access...
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="max-w-4xl mx-auto p-6 mt-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-6">
          Create a New Event
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 border">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            <label className="font-bold">
              <span className="text-red-500">* </span>Enter Event Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              value={formData.name}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <label className="font-bold">
              <span className="text-red-500">* </span>Select Event Date:
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <label className="font-bold">
              <span className="text-red-500">* </span>Enter Location Name:
            </label>
            <input
              type="text"
              name="location"
              placeholder="Event Location"
              value={formData.location}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <label className="font-bold">
              <span className="text-red-500">* </span>Enter Event Price:
            </label>
            <input
              type="number"
              name="price"
              placeholder="Event Price"
              value={formData.price}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <label className="font-bold">
              <span className="text-red-500">* </span>Enter Event Image URL:
            </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Event Image URL"
              value={formData.imageUrl}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <label className="font-bold">
              <span className="text-red-500">* </span>Enter Event Description :
            </label>
            <textarea
              name="description"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              className="border border-slate-300 p-2 rounded-md"
              required
            />

            <button
              type="submit"
              className="bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition-all mt-4"
            >
              Submit Event
            </button>
          </form>
        </div>
      </div>
    );
  }
  return null;
};

export default CreateEvent;
