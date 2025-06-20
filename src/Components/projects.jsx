export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
        Projects
      </h1>

      <div className="space-y-6 text-gray-800">

        {/* Project 1 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-purple-700">DoctorMeroSathi</h2>
          <p className="mt-2 text-gray-700">
            A healthcare web platform developed using <span className="font-medium">Java Servlet, JSP, HTML, CSS, JavaScript, and MySQL</span>.
            Features include real-time chat with doctors, appointment booking, doctor profiles, reviews, and admin panel management.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-purple-700">BookNow</h2>
          <p className="mt-2 text-gray-700">
            An online hotel booking platform using <span className="font-medium">React, Node.js, Express.js, PostgreSQL, and Tailwind CSS</span>.
            Users can search for hotels, view detailed information, and book rooms seamlessly.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-purple-700">CodeNLearn</h2>
          <p className="mt-2 text-gray-700">
            An interactive learning platform built with <span className="font-medium">React, Node.js, Express.js, PostgreSQL, and Tailwind CSS</span>.
            Offers course enrollment, quizzes, daily challenges, and a dynamic leaderboard.
          </p>
        </div>

        {/* Project 4 */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-purple-700">Badhau Gyan</h2>
          <p className="mt-2 text-gray-700">
            A Reddit/X-like community platform for Nepali users. Built for local story sharing, discussions, and advice.
            Key features include secure login, post creation, commenting, voting, and organized forums. In progress.
          </p>
        </div>
      </div>
    </div>
  );
}
