import Header from "./Header";
import { getHeaderData } from "./Header-Data";


export default async function HeaderContainer() {
  const { convexUser } = await getHeaderData();
  
  return <Header isPro={Boolean(convexUser?.isPro)} />;
}

