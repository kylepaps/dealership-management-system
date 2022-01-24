import Container from "../../components/Container";
import VehicleNav from "../../components/VehicleNav"
import useSWR from "swr";
import fetcher from "../../lib/fetcher";


export default function Projects() {
  const { data: carData } = useSWR('/api/vehicles', fetcher)
  if (!carData) {
    return <h1>loading...</h1>
  }
  const stringCarData = JSON.stringify(carData.cars)
  const getCars = JSON.parse(stringCarData)

  
  return (
    <Container>
      <VehicleNav vehicles={getCars}/>
    </Container>
  );
}

