import { Wrap, WrapItem, Spinner, Text } from "@chakra-ui/react";
import SidebarWithHeader from "./components/shared/SideBar";
import { useEffect, useState } from "react";
import { getCustomers } from "./services/Client";
import { errorNotification } from "./services/Notification";
import CardWithImage from "./components/Card";
import CreateCustomerDrawer from "./components/CreateCustomerDrawer";

function App() {
	const [customers, setCustomers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const fetchCustomers = () => {
		setIsLoading(true);
		getCustomers()
			.then((res) => {
				setCustomers(res.data);
			})
			.catch((err) => {
				setError(err.response.data.message);
				errorNotification(err.code, err.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	useEffect(() => {
		fetchCustomers();
	}, []);

	if (isLoading) {
		return (
			<SidebarWithHeader>
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</SidebarWithHeader>
		);
	}

	if(error){
		return (
			<SidebarWithHeader>
				<CreateCustomerDrawer fetchCustomers={fetchCustomers} />
				<Text mt={5}>Opps there was an error</Text>
			</SidebarWithHeader>
		);
	}

	if (customers.length <= 0) {
		return (
			<SidebarWithHeader>
				<CreateCustomerDrawer fetchCustomers={fetchCustomers} />
				<Text mt={5}>No customers found</Text>
			</SidebarWithHeader>
		);
	}

	return (
		<SidebarWithHeader>
			<CreateCustomerDrawer fetchCustomers={fetchCustomers} />
			<Wrap justify={"center"} spacing={"30px"}>
				{customers.map((customer, index) => (
					<WrapItem key={index}>
						<CardWithImage {...customer} imageNumber={index} 
						fetchCustomers={fetchCustomers}/>
					</WrapItem>
				))}
			</Wrap>
		</SidebarWithHeader>
	);
}

export default App;
