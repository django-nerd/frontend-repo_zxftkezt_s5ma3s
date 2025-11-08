export default function Hierarchy() {
  const rows = [
    { level: 'Board of Trustees', roles: ['Chairperson', 'Members'] },
    { level: 'Leadership', roles: ['Director', 'Principal', 'Vice Principal'] },
    { level: 'Academics', roles: ['HODs', 'Faculty', 'Counsellors'] },
    { level: 'Student Life', roles: ['House Masters', 'Sports & Arts Leads'] },
    { level: 'Operations', roles: ['Admin', 'Transport', 'Security'] },
  ];

  return (
    <section id="hierarchy" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Institutional Hierarchy</h2>
          <p className="mt-2 text-slate-600">Clear leadership and accountability for excellence.</p>
        </div>
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-medium">Level</th>
                <th className="px-4 py-3 font-medium">Roles</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.level} className="border-t border-slate-200">
                  <td className="px-4 py-3 text-slate-900">{r.level}</td>
                  <td className="px-4 py-3 space-x-2">
                    {r.roles.map((role) => (
                      <span
                        key={role}
                        className="inline-flex items-center rounded-full bg-slate-900/90 text-white px-3 py-1 text-xs"
                      >
                        {role}
                      </span>
                    ))}
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
