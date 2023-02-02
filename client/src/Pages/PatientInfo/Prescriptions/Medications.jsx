import React from 'react'

const Medications = (props) => {
  return (
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
            </tr>
          )
        })}
      </tbody>
    </table>
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
