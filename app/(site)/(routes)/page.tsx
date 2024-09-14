import getCurrentUser from "@/app/actions/users/getCurrentUser"
import AppRouter from "@/components/redirect/AppRouter"






export default async function Home() {


  const currentUser = await getCurrentUser()
  return (

    <AppRouter
      currentUser={currentUser}
    />
  )
}