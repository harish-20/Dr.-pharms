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
