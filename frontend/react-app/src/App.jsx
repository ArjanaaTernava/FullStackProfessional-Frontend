import { Wrap, WrapItem, Spinner, Text } from "@chakra-ui/react";
import SidebarWithHeader from "../components/shared/SideBar";
import { useEffect, useState } from "react";
import { getCustomers } from "../components/shared/Client";
import CardWithImage from "../components/Card";

function App() {
	const [customers, setCustomers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getCustomers()
			.then((res) => {
				setCustomers(res.data);
			})
			.catch((err) => console.error(err))
			.finally(() => {
				setIsLoading(false);
			});
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

	if (customers.length <= 0) {
		return (
			<SidebarWithHeader>
				<Text>No customers found</Text>
			</SidebarWithHeader>
		);
	}

	return (
		<SidebarWithHeader>
			<Wrap justify={"center"} spacing={"30px"}>
				{customers.map((customer, index) => (
					<WrapItem key={index}>
                        <CardWithImage {...customer} />
                    </WrapItem>
				))}
			</Wrap>
		</SidebarWithHeader>
	);
}

export default App;
