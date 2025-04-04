// src/app/(main)/nurses/page.tsx

async function getNurses() {
    const res = await fetch('http://localhost:3000/api/nurses', {
      cache: 'no-store',
    })
    return res.json()
  }
  
  export default async function NursesPage() {
    const nurses = await getNurses()
  
    return (
      <div className="p-8 min-h-screen bg-background">
        <h1 className="text-3xl font-bold text-primary mb-6">🧑‍⚕️ قائمة الممرضين</h1>
  
        {nurses.length === 0 ? (
          <p className="text-gray-500">لا يوجد ممرضين بعد.</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {nurses.map((nurse: any) => (
              <div
                key={nurse.id}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-all"
              >
                <h2 className="text-xl font-semibold text-primary">{nurse.name}</h2>
                <p className="text-sm text-gray-600">{nurse.specialty}</p>
                <p className="mt-2 text-gray-700 text-sm">{nurse.bio}</p>
                <p className="mt-1 text-sm">⭐ {nurse.rating} / 5</p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
  