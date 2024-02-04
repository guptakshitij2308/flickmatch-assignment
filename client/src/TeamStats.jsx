import { useState } from "react";

function TeamStats({ setId, data }) {
  const [matchId, setMatchId] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setId(matchId);
    setMatchId("");
  };

  //   console.log(data);

  return (
    <>
      <h1 className="text-white text-3xl font-bold flex justify-center mt-12 mb-12">
        Get Match Stats By Id
      </h1>

      <form className="flex gap-6 justify-center" onSubmit={handleSubmit}>
        <label className="font-semibold text-slate-100 mt-2 text-lg">
          Enter Match Id:
        </label>
        <input
          type="text"
          placeholder="Enter Match Id"
          value={matchId}
          onChange={(e) => {
            setMatchId(e.target.value);
          }}
          className="border text-left text-black outline-none border-[#C8CEE1] bg-slate-100 rounded-lg py-2 px-3 w-1/5"
        />
        <button
          className="relative py-3 px-5 rounded-lg outline-none overflow-hidden flex items-center justify-center text-white bg-green-500 hover:bg-green-400 focus:ring focus:ring-green-200"
          type="submit"
        >
          Get Match Details
        </button>
      </form>
      <table className="w-11/12 mt-12 mr-14 ml-14">
        <thead className="w-full text-gray-primary bg-gray-table">
          <tr className="w-full border-b border-gray-200 bg-white text-black">
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Date
            </th>
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Date of match
            </th>
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
          </tr>

          <tr className="w-full border-b border-gray-200 bg-white text-black">
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"></th>
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Team 1
            </th>
            <th className="px-5 py-2 border-b-2  bg-gray-100 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Team 2
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {Object?.keys(data?.stats?.teamA || {})?.map((el, index) => {
            // console.log(data?.stats?.teamA[el]);
            const uppercaseEl = el.toUpperCase();
            return (
              <tr className="w-full border-b border-gray-200" key={el}>
                <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                  {uppercaseEl}
                </td>
                <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                  {data?.stats?.teamA[el]}
                </td>
                <td className="px-5 py-1.5 bg-transparent text-inherit text-xs">
                  {data?.stats?.teamB[el]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TeamStats;
