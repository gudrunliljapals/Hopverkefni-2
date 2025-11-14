"use client";
import { useState } from "react";
import { searchQ } from "@/lib/searchQ";

export default function Page() {
  const [number, setNumber] = useState(false)
  const [error, setError] = useState(null)
  const [outcome, setOutcome] = useState([])

  async function onEnter(e) {
      e.preventDefault();
      setNumber(true);
      try {
        const sp_data = await searchQ(e.target);
        setOutcome(sp_data);
      } catch (error) {
        setError(error?.message);
      }
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <header className="mb-6">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
                Niðurstaða leitar
            </h1>
        </header>

        <form onSubmit={onEnter}>
            <label htmlFor="nr">
                <input id="nr" name="nr" type="number" min="1" step="1" inputMode="search" placeholder="leita"/>
            </label>
        </form>
      </main>
    </div>
  );
}


