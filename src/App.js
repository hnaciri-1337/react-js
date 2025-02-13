import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#D84315] text-white">
      {/* UM6P Logo Placeholder */}
      <h1 className="text-6xl font-bold tracking-wide uppercase">UM6P</h1>

      {/* Simple Message */}
      <p className="mt-4 text-lg font-medium">
        This is a demo from deployed react app.
      </p>

      {/* Call-to-action */}
      <a
        className="mt-6 px-6 py-3 text-lg font-semibold bg-white text-[#D84315] rounded-lg shadow-lg hover:bg-gray-200 transition"
        href="https://um6p.ma"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit UM6P
      </a>
    </div>
  );
}

export default App;
