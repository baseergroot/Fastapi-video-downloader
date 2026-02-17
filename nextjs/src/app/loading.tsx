export default function Loading() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] px-6 py-10 text-[var(--foreground)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      >
        <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(163,168,92,0.45),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(28,182,166,0.35),transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-1/3 h-px bg-[linear-gradient(90deg,transparent,rgba(97,68,10,0.35),transparent)]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-[calc(var(--radius)+6px)] border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-md)]" />
            <div className="space-y-2">
              <div className="skeleton h-3 w-32 rounded-full" />
              <div className="skeleton h-5 w-48 rounded-full" />
            </div>
          </div>
          <div className="skeleton h-9 w-28 rounded-full" />
        </header>

        <section className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="skeleton h-3 w-36 rounded-full" />
              <div className="skeleton h-10 w-4/5 rounded-full" />
              <div className="skeleton h-10 w-3/4 rounded-full" />
              <div className="skeleton h-4 w-2/3 rounded-full" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="skeleton h-28 rounded-[var(--radius)]" />
              <div className="skeleton h-28 rounded-[var(--radius)]" />
              <div className="skeleton h-28 rounded-[var(--radius)]" />
              <div className="skeleton h-28 rounded-[var(--radius)]" />
            </div>
          </div>

          <div className="rounded-[calc(var(--radius)+8px)] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[var(--shadow-lg)]">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="skeleton h-3 w-24 rounded-full" />
                <div className="skeleton h-6 w-40 rounded-full" />
              </div>
              <div className="space-y-4">
                <div className="skeleton h-12 w-full rounded-[var(--radius)]" />
                <div className="skeleton h-12 w-full rounded-[var(--radius)]" />
              </div>
              <div className="skeleton h-28 w-full rounded-[var(--radius)]" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
