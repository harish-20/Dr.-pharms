export const RightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 4.5l7.5 7.5-7.5 7.5"
    />
  </svg>
)

export const AdminIcon = (props) => (
  <img
    src="https://www.pngmart.com/files/21/Admin-Profile-PNG-Isolated-File.png"
    alt="admin"
    className="h-8"
    {...props}
  />
)

export const DoctorIcon = (props) => (
  <img
    src="https://icon-library.com/images/doctor-icon-png/doctor-icon-png-18.jpg"
    alt="doctor"
    className="h-8"
    {...props}
  />
)

export const PatientIcon = (props) => (
  <img
    src="https://static.thenounproject.com/png/848680-200.png"
    alt="patient"
    className="h-8"
    {...props}
  />
)

export const EyeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-4 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
)
