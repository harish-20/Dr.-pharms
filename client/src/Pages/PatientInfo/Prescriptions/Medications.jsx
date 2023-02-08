import React from 'react'

const Medications = (props) => {
  return (
    <>
      <table className="w-full border-collapse rounded-lg">
        <tbody>
          <tr>
            <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
              Name
            </th>
            <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
              Dosage
            </th>
            <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
              Frequency
            </th>
            <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
              Duration
            </th>
            <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
              End date
            </th>
            {props.removeMedication && (
              <th className="border-2 border-slate-500 text-xl font-semibold text-slate-800 p-2">
                Remove
              </th>
            )}
          </tr>
          {props.medications.map((medication, index) => {
            const endDateRedable = new Date(medication.endDate)
            return (
              <tr key={index}>
                <td className="border-2 border-slate-500 p-2">
                  {medication.name}
                </td>
                <td className="border-2 border-slate-500 p-2">
                  {medication.dosage}
                </td>
                <td className="border-2 border-slate-500 p-2">
                  {medication.frequency}
                </td>
                <td className="border-2 border-slate-500 p-2">
                  {medication.duration}
                </td>
                <td className="border-2 border-slate-500 p-2">
                  {`${endDateRedable
                    .toUTCString()
                    .slice(0, 12)} ${endDateRedable.getFullYear()}`}
                </td>
                {props.removeMedication && (
                  <td className="border-2  border-slate-500">
                    <button
                      className="px-1 py-1 w-full m-auto bg-red-600 text-white rounded-sm"
                      onClick={() => props.removeMedication(index)}
                    >
                      Remove
                    </button>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
      {props.medications.length ? (
        ''
      ) : (
        <p className="w-full text-center">No Medication is there now.</p>
      )}
    </>
  )
}

export default Medications

const dummy = {
  name: 'Amoxicillin',
  dosage: '500mg',
  frequency: 'Twice a day',
  duration: '10 days',
  endDate: '2022-11-11T12:00:00Z',
  morning: {
    beforeFood: true,
  },
  afternoon: {
    beforeFood: false,
  },
  night: {
    beforeFood: true,
  },
}
