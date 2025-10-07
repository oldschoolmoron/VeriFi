"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export function SearchPill() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!address) {
      setError("Please enter an address");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/verifyAddress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setResult(data);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-10">
      {/* Search Input */}
      <div className="flex">
        <div className="p-[1px] w-130 h-15 rounded-l-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500">
          <input
            className="rounded-l-full w-130 h-full pt-5 pb-4 pl-5 pr-10 bg-black text-gray-300 outline-none"
            type="text"
            placeholder="Enter address to verify..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          onClick={handleSearch}
          disabled={loading}
          className="p-[1.2px] rounded-r-full bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 w-20 h-15 flex items-center justify-center"
        >
          <div className="flex items-center justify-center rounded-r-full bg-black w-full h-full">
            <CiSearch className="text-white hover:text-gray-400 w-6 h-6" />
          </div>
        </button>
      </div>

      {/* Loading/Error */}
      {loading && <p className="text-gray-400 mt-3">Fetching data...</p>}
      {error && <p className="text-red-400 mt-3">{error}</p>}

      {/* Result */}
      {result && (
        <div className="mt-5 p-4 bg-gray-900 rounded-xl w-[500px] text-left">
          <p className="text-white">
            <strong>Address:</strong> {result.address}
          </p>
          <p className="text-white">
            <strong>ENS:</strong> {result.ensName || "N/A"}
          </p>
          <p className="text-white">
            <strong>Balance:</strong> {result.ethBalance} ETH
          </p>

          {result.tokens?.length > 0 && (
            <div className="mt-2">
              <strong className="text-white">Tokens:</strong>
              <ul className="text-gray-300 text-sm list-disc ml-5">
                {result.tokens.map((token, i) => (
                  <li key={i}>
                    {token.name} ({token.symbol}): {token.balance}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
