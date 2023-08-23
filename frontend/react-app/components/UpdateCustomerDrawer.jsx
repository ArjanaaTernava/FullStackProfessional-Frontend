import {
	Button,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerHeader,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	DrawerFooter,
} from "@chakra-ui/react";
import UpdateCustomerForm from "./UpdateCustomerForm";

const AddIcon = () => "+";
const CloseIcon = () => "x";

const UpdateCustomerDrawer = ({fetchCustomers, initialValues,customerId}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Button onClick={onOpen} rounded={"full"} color={"black"}
              bg={"grey"}
               _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg'
               }}
>
                Update customer
              </Button>
			<Drawer isOpen={isOpen} onClose={onClose} size={"xl"}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Update customer</DrawerHeader>

					<DrawerBody>
						<UpdateCustomerForm customerId={customerId}fetchCustomers={fetchCustomers} initialValues={initialValues}/>
					</DrawerBody>

					<DrawerFooter>
						<Button
							leftIcon={<CloseIcon/>}
							colorScheme="teal"
							onClick={onClose}
						>
							Close
						</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default UpdateCustomerDrawer;
