export default function Skills() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
        Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        {/* Technical Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Tailwind CSS</li>
            <li><strong>Backend:</strong> Node.js, Java</li>
            <li><strong>Database:</strong> MongoDB, PostgreSQL, MySQL</li>
            <li><strong>Tools:</strong> Git, GitHub, VS Code, Postman, Figma, Balsamiq, npm/Yarn</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-green-600">Soft Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Leadership</li>
            <li>Time Management</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
