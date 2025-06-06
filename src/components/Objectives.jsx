import React from 'react'

const Objectives = () => {
  return (
      <div>
          <div className="py-10 px-4">
  <h1 className="text-3xl font-bold text-center mb-10">It's good(s) for everyone</h1>

  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          title: "Save & Earn",
          text: "On things you need only now and then",
          iconColor: "text-green-500",
          iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
        },
        {
          title: "Support your neighborhood",
          text: "Sharing feels good!",
          iconColor: "text-blue-500",
          iconPath: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
        },
        {
          title: "Flexible rental Periods",
          text: "daily, Hourly or weekly rentals ",
          iconColor: "text-yellow-500",
          iconPath: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
        },
        {
          title: "Chat and Support",
          text: " 24/7 customer support for disputes",
          iconColor: "text-red-500",
          iconPath: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        },
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-3xl border-2 hover:border-green-500 shadow-2xl">
          <div className="flex items-start mb-4">
            <svg
              className={`w-8 h-8 ${item.iconColor} mr-4`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
            </svg>
            <div>
              <h2 className="text-lg font-bold mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <button className="text-black px-4 py-2 border-2 hover:bg-red-500  font-medium rounded-lg border-red-500 hover:text- transition-colors">
        Partake
      </button>
    </div>
  </div>
</div>

          </div>
  )
}

export default Objectives