import {Toaster } from 'react-hot-toast'

const DepartmentLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full overflow-auto">
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default DepartmentLayout