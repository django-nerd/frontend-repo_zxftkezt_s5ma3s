export default function Hierarchy() {
  const structure = [
    { level: 'Board of Trustees', roles: ['Chairperson', 'Advisory Council'] },
    { level: 'Executive Leadership', roles: ['Director', 'Principal', 'Vice Principals'] },
    { level: 'Academic Divisions', roles: ['STEM School', 'Humanities School', 'Arts & Culture', 'Sports & Wellness'] },
    { level: 'Student Leadership', roles: ['School Captain', 'House Captains', 'Clubs & Societies'] },
    { level: 'Operations & Community', roles: ['Admissions', 'Transport', 'Health Centre', 'Parent Council'] },
  ];

  return (
    <section id="hierarchy" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start gap-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Institutional Hierarchy</h2>
          <p className="max-w-2xl text-gray-600">Clear lines of responsibility to support excellence in teaching and learning.</p>
        </div>

        <div className="overflow-x-auto rounded-xl ring-1 ring-gray-200">
          <table className="min-w-full divide-y divide-gray-200 bg-white">
            <thead className="bg-gray-50/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Level</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">Roles / Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {structure.map((row) => (
                <tr key={row.level} className="hover:bg-gray-50/60">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.level}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div className="flex flex-wrap gap-2">
                      {row.roles.map((r) => (
                        <span key={r} className="rounded-full bg-blue-600/10 px-3 py-1 text-blue-700 ring-1 ring-blue-200">{r}</span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
