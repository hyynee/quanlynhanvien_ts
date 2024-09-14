




const EmployeeLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className="w-full h-full overflow-auto">
        {children}
    </div>
  )
}

export default EmployeeLayout